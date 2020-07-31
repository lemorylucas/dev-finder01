import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../..//services/api';

import { Container, Form, Main } from './styles';

function List() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 3000,
      }
    )
  }, [])

  useEffect(() => {
     async function loadDevs(){
       const response = await api.get('/devs');

       setDevs(response.data);
     }

     loadDevs();
  }, [])

  async function handdleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data])
  }

  return (
    <>
    <Header />
    <Container>
      <Form>
        <strong>Cadastrar</strong>
        <form onSubmit={handdleSubmit}>
          <div className="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input name="github_username" id="github_username" required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input name="techs" id="techs" required value={techs}
              onChange={e => setTechs(e.target.value)}

            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude}
                onChange={e => setLatitude(e.target.latitude)}

              />
            </div>

            <div className="input-block">
              <label htmlFor="">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude}
                onChange={e => setLongitude(e.target.longitude)}

              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </Form>

      <Main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/64281920?s=460&u=ae55282c0aa49d70cb5700eb8dbb68858a7e1e44&v=4" alt="" />
              <div className="user-info">
                <strong>Lemory Lucas</strong>
                <span>ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Usuário apaixonado por tecnologia em busca de seu primeiro emprego</p>
            <a href="https://github.com/lemorylucas">Acessar perfil no Github!</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/64281920?s=460&u=ae55282c0aa49d70cb5700eb8dbb68858a7e1e44&v=4" alt="" />
              <div className="user-info">
                <strong>Lemory Lucas</strong>
                <span>ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Usuário apaixonado por tecnologia em busca de seu primeiro emprego</p>
            <a href="https://github.com/lemorylucas">Acessar perfil no Github!</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/64281920?s=460&u=ae55282c0aa49d70cb5700eb8dbb68858a7e1e44&v=4" alt="" />
              <div className="user-info">
                <strong>Lemory Lucas</strong>
                <span>ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Usuário apaixonado por tecnologia em busca de seu primeiro emprego</p>
            <a href="https://github.com/lemorylucas">Acessar perfil no Github!</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/64281920?s=460&u=ae55282c0aa49d70cb5700eb8dbb68858a7e1e44&v=4" alt="" />
              <div className="user-info">
                <strong>Lemory Lucas</strong>
                <span>ReactJS, NodeJs</span>
              </div>
            </header>
            <p>Usuário apaixonado por tecnologia em busca de seu primeiro emprego</p>
            <a href="https://github.com/lemorylucas">Acessar perfil no Github!</a>
          </li>
        </ul>

        
      </Main>
    </Container>
    </>
  );
}

export default List;
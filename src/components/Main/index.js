import React from 'react';
import { Link } from 'react-router-dom';

import CW from '../../assets/Coworking.png';
import NA from '../../assets/New app.png';
import GL from '../../assets/Geo location.png';

import { Section, Container } from './styles';


function Main() {
  return (
    <>
    
    <Section>
      <h1>Encontre um dev próximo à você.</h1 >
      <p>Comece hoje mesmo algum app, solução ou website</p>

      <Link to="/List">
      <button as="a" className="Button">
        Conecte-se à outros devs
      </button>
      </Link>
      
    </Section>

    <Container>
    <div className="card">
      <img src={CW} className="image" alt="Co Working"/>
      <h2>Compartilhe seus pensamentos</h2>
    </div>

    <div className="card">
      <img src={NA} alt="New App"/>
      <h2>Construa algo com outras pessoas</h2>
    </div>

    <div className="card">
      <img src={GL} alt="Geo Location"/>
      <h2>Encontre devs próximos à você</h2>
    </div>
      
    </Container>
    </>
  );
}

export default Main;
import React from 'react';

import {FaGithub, FaLinkedin} from 'react-icons/fa'; 

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <h1> DEVFinder </h1>

      <span>Criado por Lemory Lucas ®</span>

      <div className="links">
      <a href="https://github.com/lemorylucas"><FaGithub color="#fff" size={30}/></a>
      <a href="https://www.linkedin.com/in/lemory-lucas-81880a130"><FaLinkedin color="#fff" size={30} /></a>
      </div>
      

    </Container>
  );
}

export default Footer;
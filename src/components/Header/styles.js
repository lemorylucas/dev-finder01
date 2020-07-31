import styled from 'styled-components';

export const Menu = styled.nav`
  .logo {
    font: 40px 'Montserrat', sans-serif;
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
  }

  @media(max-width: 800px){
    .logo {
      font-size: 25px;
      padding: 25px;
    }
  }

  width: 100%;
  height: 100px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right:5%;

  background: #1C1F24;
  border-bottom: 5px solid #5659FF;

  .ButtonLink {
    color: #FFF;
    border: 1px solid #5659FF;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-size: 20px;
    outline: none;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background: #5659FF;

    &:hover,
    &:focus{
      opacity: .5s;
    }
  } 

  @media(max-width: 800px){
    .ButtonLink {
      padding: 8px 12px;
      font-size: 10px;
    }
  }
`;


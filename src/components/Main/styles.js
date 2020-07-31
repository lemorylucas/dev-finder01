import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 80px;

  h1{
    font: 80px 'Roboto', sans-serif;
    font-weight: lighter;

    @media(max-width: 520px){
      font-size: 20px;
    }

    @media(min-width: 521px) and (max-width:768px) {
      font-size: 30px;
    }

    @media(min-width: 768px) and (max-width:1376px) {
      font-size: 35px;
    }
  }

  p{
    font: 30px 'Roboto', sans-serif;
    font-weight: lighter;

    @media(max-width: 520px){
      font-size: 15px;
    }

    @media(min-width: 521px) and (max-width:768px) {
      font-size: 20px;
    }

    @media(min-width: 768px) and (max-width:1376px) {
      font-size: 25px;
    }
  }

  .Button {
    color: #FFF;
    border: 1px solid #5659FF;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-size: 40px;
    outline: none;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background: #5659FF;
    margin-top: 30px;

    &:hover,
    &:focus{
      opacity: .5s;
  }
}

@media(max-width: 520px){
    .Button{
      font-size: 20px;
      padding: 8px 12px;
    }
  }
`;


export const Container = styled.div`
  margin-top: 80px;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  @media(max-width: 1000px){
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .card{
    display: flex;
    flex-direction: column;
    padding: 25px;

    justify-content: center;
    align-items: center;

    color: #fff;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.10);

    h2{
      padding: 5px;
      font: 25px 'Roboto', sans-serif;
    }
  }
`;



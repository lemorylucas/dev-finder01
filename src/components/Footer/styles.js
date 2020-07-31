import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  margin-top: 40px;
  background-color: #1C1F24;
  
  display: flex;
  justify-content: space-between;

  color: #fff;
  padding: 20px;  

  h1{
    font: 30px 'Montserrat', sans-serif;
    margin-left: 40px;
    margin-top: 10px;

    @media(max-width: 700px){
      display: none;
    }
  }

  span{
    font: 15px 'Montserrat', sans-serif;
    margin-top: 20px;

    @media(max-width: 700px){
      margin-left: 15px;
    }
  }

  .links{
    margin-top: 15px;
    margin-right: 40px;
    
    a{
      text-decoration: none;
    }    
  }
`;

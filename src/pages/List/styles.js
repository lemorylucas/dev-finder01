import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media(max-width: 800px) {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 400px;
  height: 450px;
  background-color: #ccc;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 30px 20px;
  margin: 50px;

  @media(max-width: 800px) {
    width: 70%;
  }

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #000;
    margin-bottom: 20px;
  }

  form .input-block + .input-block{
    margin-top: 20px;
  }

  form .input-group{
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  form .input-group .input-block {
    margin-top: 0;
  }

  form .input-block label {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  form .input-block input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    background-color: #ccc;
    border: 0;
    border-bottom: 1px solid #000;
  }

  form button[type=submit]{
    width: 100%;
    border: 0;
    margin-top: 50px;
    margin-bottom: 20px;
    background: #5659FF;
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    &:hover{
      background: #5763ff;
    }
  }
`;

export const Main = styled.div`
  display: flex;

  padding: 50px;
  align-items: center;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;
    align-items: center;

    @media(max-width: 767px) {
      display: flex;

      flex-direction: column;
    }

    li.dev-item {
      background: #ccc;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      padding: 15px;
    }

    li.dev-item header {
      display: flex;
      align-items: center;
    }

    li.dev-item header img {
      width: 100px;
      height: 100px;

      border-radius: 50%;
    }

    li.dev-item header .user-info {
      margin-left: 10px;
    }

    .user-info strong {
      display: block;
      font-size: 16px;
      color: #2c2c2c;
    }

    .user-info span {
      font-size: 14px;
      color: #555;
      margin-top: 2px;
    }

    li.dev-item p {
      font-size: 16px;
      line-height: 20px;
      margin: 10px 0px;
      color: #000;
    }

    li.dev-item a {
      font-size: 14px;
      color: #2634ff;
      text-decoration: none;
    }

    li.dev-item a:hover {
      color: #2756ff;
    }
  
  }
`;
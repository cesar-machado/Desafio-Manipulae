import styled from "styled-components";

export const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 90px;
  width: 100vw;

  h1 {
    margin-bottom: 45px;
    text-align: center;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`;

export const Input = styled.input`
  width: 500px;
  height: 48px;
  color: #000;
  font-weight: 600;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 50px;

  &:focus {
    border: 4px solid #ffd500;
    border-radius: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
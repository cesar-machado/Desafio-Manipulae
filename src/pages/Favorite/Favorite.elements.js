import styled from "styled-components";

export const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
  width: 100vw;

  h1 {
    margin-bottom: 45px;
    text-align: center;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const BoxList = styled.div`
  background: #01030d;
  width: 250px;
  height: 480px;
  margin-bottom: 30px;
  border-radius: 10px;

  img {
    position: relative;
    width: 250px;
    height: 250px;
  }

  svg {
    border: none;
    border-radius: 30px;
    position: absolute;
    z-index: 2;
    margin-top: -63px;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  margin-top: -20px;
  z-index: 2;
`;

export const Text = styled.p`
  word-spacing: 3px;
  line-height: 28px;
  /* color: #000; */
  margin-left: 10px;

  a {
    color: #ffd500;
    text-decoration: underline;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TrashBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  margin-left: 50px;
  margin-top: -5px;
  cursor: pointer;
`;

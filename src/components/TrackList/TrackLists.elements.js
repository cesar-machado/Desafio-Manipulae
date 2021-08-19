import styled from "styled-components";

export const Box = styled.div`
  background: #fff;
  width: 250px;
  height: 380px;
  margin-bottom: 30px;
  border-radius: 10px;

  img {
    position: relative;
    width: 250px;
    height: 250px;
  }

  svg {
    background: #000;
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
  p {
    word-spacing: 3px;
    line-height: 25px;
    color: #000;
    margin-left: 10px;
  }
`;

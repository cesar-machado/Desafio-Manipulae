import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #5c0099;
  height: 90px;
  z-index: 999;
`;

export const NavBarContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-left: 60px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  font-size: 22px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

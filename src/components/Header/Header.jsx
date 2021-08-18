import {
  Nav,
  NavBarContainer,
  NavItem,
  NavLink,
  NavMenu,
} from "./Header.elemets";
import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <Nav>
      <NavBarContainer>
        <img src={Logo} alt="logo" height="90" width="80" />
        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/favoritas">Musicas Favoritas</NavLink>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
}

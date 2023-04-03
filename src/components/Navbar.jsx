import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Button, Drawer } from '@mui/material';
import Menu from "./Menu";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }`

const Contener = styled.header`
    margin-bottom: 1rem;
    height: 5rem;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    background-color: white;
  `;

  const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `;

  const Logo = styled.img`
      cursor:pointer;
      height: 5rem;
      width:10rem;
  `;

  const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding:5px 15px;
    width:100%;
    border-radius: 20px;
  `;
  const SearchInput = styled.input`
    border: none;
    width:100%;
  `;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  margin-Right: 1rem;
  cursor:pointer;
  font-size:18px;
`;

const Navbar = () => {
  return (
    <Contener>
      <Left>
        <MenuIcon/>
        <StyledLink to="/"><Logo src = {`/assets/images/logo.jpeg`}
        alt = "logo"/>
        </StyledLink>
      </Left>
          
      <Center>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search"/>
            <SearchIcon/>
          </SearchContainer>
      </Center>

      <Right>
      <Nav><StyledLink to="/">Home</StyledLink></Nav>
      <Nav><StyledLink to="/course">Courses</StyledLink></Nav>
      <Nav><StyledLink to="/projects">Project</StyledLink></Nav>
      </Right>
      <NavButton>
        <Button color="inherit"><StyledLink to="/login">Login </StyledLink> </Button>
      </NavButton> 
    </Contener>        

  )
}

export default Navbar

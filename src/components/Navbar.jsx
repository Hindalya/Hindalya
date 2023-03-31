import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Contener = styled.header`
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

  const Logo = styled.h2`
      cursor:pointer;
      margin-left: 1rem;
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
  margin-left: 1rem;
  cursor:pointer;
  font-size:18px;
`;

const Navbar = () => {
  return (
    <Contener>
      <Left>
        <MenuIcon/>
        <Logo>Hindalya</Logo>
      </Left>
          
      <Center>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search"/>
            <SearchIcon/>
          </SearchContainer>
      </Center>

      <Right>
          <Nav>Home</Nav>
          <Nav>About</Nav>
          <Nav>Contact</Nav>
      </Right>
    </Contener>        

  )
}

export default Navbar

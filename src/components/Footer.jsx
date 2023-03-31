import styled from "styled-components";
  const Container = styled.header`
    display: flex;
    padding: 1rem;
    justify-content: space-around;
    background-color: hsl(210,8%,15%);
    @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  `;
  const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
  }
    `;
  const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: auto;
  }
  `;
  const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: auto;
  }
  `;
  const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1rem;
    width: auto;
  }
  `;
const Heading = styled.h5`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color:hsl(210,8%,75%)
`;

const Link = styled.a`
  text-decoration: none;
  color: hsl(210,8%,60%);
  margin: 0.3rem;
  cursor: pointer;
  font-size: 12px;
  `;
  const SocialContainer = styled.div`
  display: flex;
  `;
  const Tagline = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: hsl(210,8%,60%);
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: auto;
  }
  `
function Footer() {
  return (
    <Container>
      <Left>
        <Heading>
            HINDALYA
          </Heading>
        <LinkContainer>
          
          <Link>Questions</Link>
          <Link>Help</Link>
        </LinkContainer>
      </Left>

      <Center>
      <Heading>COMPANY</Heading>
        <LinkContainer>
          <Link>About</Link>
          <Link>Press</Link>
          <Link>Work Here</Link>
          <Link>Legal</Link>
          <Link>Privacy Policy</Link>
          <Link>Term of Services</Link>
          <Link>Contact Us</Link>
          <Link>Cookies Settings</Link>
          <Link>Cookie Policy</Link>
        </LinkContainer>
      </Center>
      <Center>
      <Heading>HINDALYA NETWORK</Heading>
        <LinkContainer>
          <Link>Technology</Link>
          <Link>Culture & recreation</Link>
          <Link>Life & arts</Link>
          <Link>Science</Link>
          <Link>Professional</Link>
          <Link>Business</Link>
          <Link>API</Link>
          <Link>Data</Link>
        </LinkContainer>
      </Center>
      <Right>
      <SocialContainer>
        <Link>Blog</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>LinkdIn</Link>
        <Link>Instagram</Link>
      </SocialContainer> 
        <Tagline>Site design / logo © 2023 Hindalya Inc; user contributions licensed under CC BY-SA. rev 2023.3.30.43364</Tagline>
      </Right>
    </Container>
  )
}

export default Footer

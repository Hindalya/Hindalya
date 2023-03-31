import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;
const Home = () => {
  return (
    <HomeWrapper>
      <Title>Welcome to My Website</Title>
      <Subtitle>Learn more about what I do and how I can help you</Subtitle>
      <Button>Get Started</Button>
    </HomeWrapper>
  )
}



export default Home

import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = styled(Grid)`
  text-align: center;
  `;
const ImageContaioner = styled.div`
  height: 3rem;
`
  const Logo = styled.img`    
    width: 100%;
    height: 3rem;
    object-fit: contain;

  `;

const Span = styled.p`
  margin-top: .5rem;
`

const Courses = ({item}) => {
  return (
    <Card item xs={2} sm={2} md={2}>
        <ImageContaioner>
        <Logo
            src={item.image}
            alt='item.name'  
        />
        </ImageContaioner>
        <StyledLink><Span>{item.name}</Span></StyledLink>
    </Card>
  )
}

export default Courses

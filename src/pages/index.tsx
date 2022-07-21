import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa';
import { Container, Header, Link } from '../components';

const H1 = styled.h1`
  text-align: center;
  font-family: 'Montserrat-Bold';
`;

const P = styled.p`
  text-align: center;
  font-size: 1.2em;
`;

const Span = styled.span`
  text-align: center;
  padding: 5px;
  font-size: 1.3em;
  & > a {
    padding-right: 10px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <H1>{"👋 Hello, I'm Vitor Silva "}</H1>
      <P>
        {
          'Web Dev | [ Automation, Gadget, Self-sustaining ] fanatic | Dog lover '
        }
      </P>
      <Span>
        <Link label="github" href="https://github.com/ksvitorsilva">
          <FaGithub />
        </Link>
        <Link label="linkedin" href="https://pt.linkedin.com/in/ksvitorsilva">
          <FaLinkedin />
        </Link>
        <Link label="medium" href="https://medium.com/@ksvitorsilva">
          <FaMedium />
        </Link>
        <Link label="dev.to" href="https://dev.to/ksvitorsilva">
          <FaDev />
        </Link>
      </Span>
    </Container>
  );
};

export default Home;

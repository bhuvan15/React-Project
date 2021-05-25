
import styled from "styled-components";
import {Link} from "react-router-dom"

function Login() {
  return (
    <Container>
      <Content>
        <Box>
          <BoxLogoOne src="/images/cta-logo-one.svg" alt="" />
          <Link to={`/info`}><button type="button" className="btn btn-danger btn-lg " style={{width:"100%",marginBottom:"10px"}}>Explore</button></Link>
          <Description>
            Get access to all the exclusive content of Disney, Marvel, Starwars, Pixar, Natgeo in our premium membership.
            Entire MCU is waiting for you to come and be a part of a great universe.Catch all the live sports matches at a single place. oPremium membership includes movies like the Avengers, StarWars series, The Incredibles, Game Of Thrones, Pirates of the Carribean Just for Rs 1200 for yearly membership
          </Description>
          <BoxLogoTwo src="/images/cta-logo-two.png" alt="" />
        </Box>
        <BackgroundImage />
      </Content>
    </Container>
  );
};
export default Login;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BackgroundImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 70px;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Box = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BoxLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin-left: 25px;
`;



const Description = styled.p`
  color: #fff;
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const BoxLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-left: 20px;
`;


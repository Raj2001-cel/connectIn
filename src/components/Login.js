import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";


const Login  =  (props) =>{

  var logo = {
    position: "abosolute",
    top: "0px",
    left: "5px",
    
    width: "146px",
  }
    return (
        <Container>
            <Nav>
                <a href="/">
                 
                    <img className="logo" style={logo} src="/images/connectIn.svg"  alt="ConnectIn"   />
                  
                </a>
                
                <div>
                    <Join> Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>

            </Nav>
      
            <Section>
            <Hero>
              <h1>Welcome to your professional community</h1>
                <Form>
                <Google>
                  <img className = "google-icon" src="/images/google.svg" alt="" />
                  Sign in with Google
                </Google>
              </Form>
             
            </Hero>
            </Section>
           
        </Container>
    );
};


const Form = styled.div`
  margin-top: 100px;
  width: 308px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 46px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;


const Hero = styled.div`

  h1 {
    padding-bottom: 0;
    width: 75%;
    font-size: 30px;
    color: #38B6FF;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  


`;


const Section  =  styled.section`

  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }

`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #38B6FF;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 6px;
  color: rgba(255,255,255, 1);
  margin-right: 12px;
  &:hover {
    background-color: rgba(255,255,255, 0.4);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const Container =  styled.div`
    padding: 0px;
    
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
          padding: 0 5px;
        }
      }

   
`;

export default Login;
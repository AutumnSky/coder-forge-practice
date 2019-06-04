import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: gray;
  display: flex;
  flex-direction: row;
`;

const Cols = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.button`
  font-weight: 700;
  min-width: 200px;
  margin-bottom: 8px;
  font-size: 0.8rem;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Cols>
          <Menu>About</Menu>
          <Menu>How We Roll</Menu>
          <Menu>Tutorials</Menu>
          <Menu>Code Snippet</Menu>
          <Menu>Blog</Menu>
          <Menu>Contact</Menu>
        </Cols>
        <Cols>
          <Menu>Site Map</Menu>
          <Menu>Terms of Use</Menu>
        </Cols>
        <Cols>
          <Menu>Login</Menu>
          <Menu>Sign Up</Menu>
        </Cols>
      </FooterContainer>
    );
  }
}

export default Footer;

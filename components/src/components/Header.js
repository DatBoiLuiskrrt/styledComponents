import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Nav = styled.div`
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  border-bottom: 1px solid rgba(0,0,0,.0975);
`
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media( max-width: 500px ) {
    direction: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid black;
    
  }
`
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  @media( max-width: 500px ) {
      direction: flex;
      width: 100vw;
     
    }
  
`
const Insta = styled.div`
    display:flex;
    justify-content: center;
    
`
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
  @media( max-width: 900px ) {
    display: none;
  }
`
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active, &:focus {
    text-align: left;
  }
`
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
  @media( max-width: 900px ) {
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    width: 100vw;
  }
`
const MenuLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media( max-width: 500px ) {
    flex-direction: column;
    padding: 5px ;
    
  }
  
`
const Alert = () => {
    return (
       alert('You clicked Hello')
    );
};

function Header () {
    return (
      <Nav>
        <NavHeader>
        
          <NavLeft>
            <Insta>
            <strong>Instagram</strong>
            </Insta>
            
            
          </NavLeft>
  
          <NavCenter>
            {/* <Input type="text" placeholder="Search" /> */}
            <h1>Welcome Paisa 😜</h1>
          </NavCenter>
  
          <NavRight>
  
            <MenuLink href="#">
                <Insta>Hola</Insta>
                <Insta onClick={ () => { Alert()}}>Hello</Insta>
                <Insta>Hi</Insta>
            </MenuLink>
  
            
          </NavRight>
  
        </NavHeader>
      </Nav>
    )
  }
  
  export default Header;
import React from "react";
import styled from "styled-components";

import TextInput from "../Primitives/TextInput";
import LoginButton from "../Primitives/LoginButton"

const LoginCardWrapper = ({
  ...props
}) => {
  return ( <
    div {
      ...props
    } >
    <
    TextInput placeholder = {
      "Email"
    }
    /> <
    TextInput placeholder = {
      "Password"
    }
    /> <
    LoginButton > LOGIN < /LoginButton> < /
    div >
  )

};

const LoginCard = styled(LoginCardWrapper)
`

width: 420px;
height: 400px;

box-shadow: 0 0 10px rgba(0,0,0,0.12);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default LoginCard;
import React from "react";
import styled from "styled-components";

const TextInput = styled.input `

width: 90%;
height: 20px auto;
border: 1px solid #919191;
border-radius: 5px;

& + & {
  margin-top: 20px;
}

`

export default TextInput;
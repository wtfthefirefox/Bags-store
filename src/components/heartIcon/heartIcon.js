import React from "react";
import styled from "styled-components/native";

import Heart from "../../../assets/svg/heart.svg";

const HeartIcon = ({isActive, isAbsolutePos, posCoordinates}) => {
  const Wrapper = styled.View`
    position: ${props => props.isAbsolute ? "absolute" : "relative"};
    ${props => props.pos.split(" ")[0] !== "0" ? `right: ${props.pos.split(" ")[0]};` : ""}
    ${props => props.pos.split(" ")[1] !== "0" ? `bottom: ${props.pos.split(" ")[1]};` : ""}
    ${props => props.pos.split(" ")[2] !== "0" ? `left: ${props.pos.split(" ")[2]};` : ""}
    ${props => props.pos.split(" ")[3] !== "0" ? `top: ${props.pos.split(" ")[3]};` : ""}
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${props => props.active ? "#c7051a" : "#b8b8b8"};
    border-radius: 50;
    box-shadow: ${props => props.active ? "0px 5px 10px rgba(199, 5, 26, 0.4)" : "0px 5px 10px rgba(40, 83, 53, 0.4)"};   
  `;

  return (
    <Wrapper active={isActive} isAbsolute={isAbsolutePos} pos={posCoordinates}>
      <Heart />
    </Wrapper>
  )
}

export default HeartIcon;
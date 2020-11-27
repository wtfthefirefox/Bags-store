import React from "react";
import styled from "styled-components/native";

import icons from "../../../assets/svg/icons";

const RateComponent = ({rate}) => {
  return (
    <Wrapper>
      <icons.star style={{marginRight: 5, marginTop: 1}}/>
      <RateNum>{rate}</RateNum>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 34px;
  height: 14px;
  flex-direction: row;
  justify-content: flex-start;
`;

const RateNum = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(6, 6, 8, 0.5);
`;

export default RateComponent;
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  height: ${props => props.height}; 
  width: 100%;
  background-color: ${props => props.color};
  border-top-right-radius: ${props => props.rounded.split(" ")[0]};
  border-bottom-right-radius: ${props => props.rounded.split(" ")[1]};
  border-bottom-left-radius: ${props => props.rounded.split(" ")[2]};
  border-top-left-radius: ${props => props.rounded.split(" ")[3]};
  margin: ${props => props.margins};
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
  padding-left: 20px;
  padding-right: 20px;
`;

const SectionWrapper = styled.View`
  width: 100%;
  height: ${props => props.height};
  flex-direction: column;
  justify-content: flex-start;
`;

const CardsWrapper = styled.View`
  width: 100%;
  height: ${props => props.height};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom};
`;

const CardItemWrapper = styled.View`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margins};
  padding-right: ${props => props.paddings.split(" ")[0]};
  padding-bottom: ${props => props.paddings.split(" ")[1]};  
  padding-left: ${props => props.paddings.split(" ")[2]}; 
  padding-top: ${props => props.paddings.split(" ")[3]}; 
  flex-direction: ${props => props.flDir};
  justify-content: flex-start;
  align-items: flex-start;
`;

export default {
  Container,
  SectionWrapper,
  CardsWrapper,
  CardItemWrapper
}
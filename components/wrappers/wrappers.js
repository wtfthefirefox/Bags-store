import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  height: ${props => props.height}; 
  width: 100%;
  background-color: ${props => props.color};
  border-top-right-radius: ${props => props.rounded.split(' ')[0]};
  border-bottom-right-radius: ${props => props.rounded.split(' ')[1]};
  border-bottom-left-radius: ${props => props.rounded.split(' ')[2]};
  border-top-left-radius: ${props => props.rounded.split(' ')[3]};
  margin: ${props => props.margins};
  padding-top: ${props => props.paddingTop ? props.paddingTop : 0};
  padding-left: 20px;
  padding-right: 20px;
`;

export default {
  Container
}
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import icons from '../../assets/svg/icons';
import wrappers from '../wrappers';

const ItemPage = () => {
  return (
    <>
      <wrappers.Container color="#FFB9C4" rounded="0 30px 30px 0" height="433px" margins="0 0 30px 0" paddingTop="44px" >
        <ItemHeader>
          <icons.Return width="17" height="17" />
          <LikeBtn>
            <icons.Heart width="12" height="12" />
          </LikeBtn>
        </ItemHeader>
        <ItemBody>
          <ItemSpecsList>
            <ItemSpecs>
              <ItemSpecTitle>Brand</ItemSpecTitle>
              <ItemSpecDescription>Moon</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Code</ItemSpecTitle>
              <ItemSpecDescription>Y2d435</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Leather</ItemSpecTitle>
              <ItemSpecDescription>100%</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Color</ItemSpecTitle>
              <ColorsList>
                <ColorsItem active>
                  <ColorsItemActive color="#E37790" />
                </ColorsItem>
                <ColorsItem color="#000000"/>
                <ColorsItem color="#D6B379" last/>
              </ColorsList>
            </ItemSpecs>
          </ItemSpecsList>
          <Image source={require("../../assets/img/leather__pink.png")} />
        </ItemBody>
      </wrappers.Container>
      <wrappers.Container color="#ffffff" rounded="0 0 0 0" height="315px" margins="0 0 30px 0">
        <WhiteHeaderContainer>
          <ItemTille>Pink Bag</ItemTille>
          <ItemPricesWrapper>
            <ItemPriceWithoutSale>$ 899</ItemPriceWithoutSale>
            <ItemPrice>$ 789</ItemPrice>
          </ItemPricesWrapper>
        </WhiteHeaderContainer>
        <SectionTitle>Size</SectionTitle>
        <SizeList>
          <SizeListItem active>
            <SizeListItemValue active>S</SizeListItemValue>
          </SizeListItem>
          <SizeListItem>
            <SizeListItemValue>M</SizeListItemValue>
          </SizeListItem>
          <SizeListItem last>
            <SizeListItemValue>L</SizeListItemValue>
          </SizeListItem>
        </SizeList>
        <SectionTitle>About</SectionTitle>
        <SectionDescripiton>
          Occaecat qui sit quis labore reprehenderit nulla. Amet pariatur voluptate laboris ipsum veniam exercitation est do duis quis laborum reprehenderit aute.
        </SectionDescripiton>
        <ItemBottomWrapper>
          <ItemCountWrapper>
            <icons.Plus />
            <CountItem>2</CountItem>
            <icons.Minus />
          </ItemCountWrapper>
          <AddToCartBtn>
            <AddToCartBtnValue>ADD TO CART</AddToCartBtnValue>
          </AddToCartBtn>
        </ItemBottomWrapper>
      </wrappers.Container>
    </>
  )
}

const ItemBody = styled.View`
  width: 100%;  
  flex-direction: row;
  justify-content: space-between;
`;

const ItemHeader = styled.View`
  width: 100%;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const LikeBtn = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #C7051A;
  border-radius: 50;
  box-shadow: 0px 5px 10px rgba(199, 5, 26, 0.4);   
`;

const ItemSpecsList = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 21px;
`;

const ItemSpecs = styled.View`
  max-width: 74px;
  margin-bottom: 22px;
`;

const ItemSpecTitle = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8B2833;
  margin-bottom: 5px;
`;

const ItemSpecDescription = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: rgba(139, 40, 51, 0.5);
`;

const ColorsList = styled.View`
  max-width: 74px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ColorsItem = styled.View`
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50;
  background-color: ${props => !props.color ? '#C7051A' : props.color};
  margin-right: ${props => props.last ? 0 : 10}px;
  margin-bottom: 10px;
`;

const ColorsItemActive = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50;
  background-color: ${props => props.color};
  border: 2px solid #FFB9C4;
`;

const WhiteHeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemTille = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #060608;
  margin-right: auto;
`;

const ItemPricesWrapper = styled.View`
  width: 124px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const ItemPrice = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #060608;
  margin-top: 9px;
`;

const ItemPriceWithoutSale = styled.Text`
  margin-top: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;
  color: #C7051A;
  margin-right: auto;
`;

const SectionTitle = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #060608;
  margin-bottom: 9px;
`;

const SectionDescripiton = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: rgba(6, 6, 8, 0.5);
  margin-bottom: 40px;
`;

const SizeList = styled.View`
  max-width: 128px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const SizeListItem = styled.View`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active ? '#C7051A' : '#ffffff'};
  border: 2px solid ${props => props.active ? '#C7051A' : 'rgba(254, 115, 138, 0.2)'};
  border-radius: 5px;
  margin-right: ${props => props.last ? 0 : '10px'};
`;

const SizeListItemValue = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.active ? '#ffffff' : 'rgba(0, 0, 0, 0.5)'};
`;

const ItemBottomWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ItemCountWrapper = styled.View`
  width: 116px;
  height: 34px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  margin-top: 10px;
`;

const CountItem = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #060608;
`;

const AddToCartBtn = styled.View`
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 46px;
  background: #C7051A;
  border-radius: 32px;
`;

const AddToCartBtnValue = styled.Text`
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

export default ItemPage;
import React from "react";
import { connect } from 'react-redux';
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";

import icons from "../../../assets/svg/icons";
import images from '../../../assets/img/images';
import wrappers from "../wrappers";
import HeartIcon from "../heartIcon";

import * as actionCreators from '../../redux/actionCreators';

const ItemPage = ({idItem, items, changeActiveColor, changeActiveSizeOfItem, incrementCountOfItem, decrementCountOfItem, onAddToCart}) => {
  const {brand, code, intPercentLeather, price, sizes, about, name, isSale, count, colors, colorsImgs, id, activeImgId, activeSizeId} = items[idItem];

  return (
    <ScrollView style={{contentSize: {height: 812, width: 375}}} showsVerticalScrollIndicator={false} bounces={false} >
      <wrappers.Container color="#FFB9C4" rounded="0 30px 30px 0" height="433px" margins="0 0 30px 0" paddingTop="44px" >
        <ItemHeader>
          <Link to="/">
            <icons.Return />
          </Link>
          <HeartIcon isActive={true} isAbsolutePos={false} posCoordinates="0 0 0 0" />
        </ItemHeader>
        <ItemBody>
          <ItemSpecsList>
            <ItemSpecs>
              <ItemSpecTitle>Brand</ItemSpecTitle>
              <ItemSpecDescription>{brand}</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Code</ItemSpecTitle>
              <ItemSpecDescription>{code}</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Leather</ItemSpecTitle>
              <ItemSpecDescription>{`${intPercentLeather}%`}</ItemSpecDescription>
            </ItemSpecs>
            <ItemSpecs>
              <ItemSpecTitle>Color</ItemSpecTitle>
              <ColorsList> 
                {
                  colors.map((color, idx) => {
                    if (idx === activeImgId) {
                      if (idx === colors.length - 1) {
                        return (
                          <TouchableOpacity onPress={() => changeActiveColor(id, idx)}> 
                            <ColorsItem active last>
                              <ColorsItemActive color={color} />
                            </ColorsItem>
                          </TouchableOpacity>
                        )
                      }
                      return (
                        <TouchableOpacity onPress={() => changeActiveColor(id, idx)}> 
                          <ColorsItem active>
                            <ColorsItemActive color={color} />
                          </ColorsItem>
                        </TouchableOpacity>
                      )
                    } else if (idx == colors.length - 1) {
                      return (
                        <TouchableOpacity onPress={() => changeActiveColor(id, idx)}> 
                          <ColorsItem color={color} last/> 
                        </TouchableOpacity>
                      )
                    } else {
                      return (
                        <TouchableOpacity onPress={() => changeActiveColor(id, idx)}> 
                          <ColorsItem color={color} />
                        </TouchableOpacity>
                      )
                    }
                  })
                }
              </ColorsList>
            </ItemSpecs>
          </ItemSpecsList>
          <Image source={images[colorsImgs[activeImgId]]} style={{width: 236, height: 250}} />
        </ItemBody>
      </wrappers.Container>
      <wrappers.Container color="#ffffff" rounded="0 0 0 0" height="315px" margins="0 0 30px 0">
        <WhiteHeaderContainer>
          <ItemTille>{name}</ItemTille>
          <ItemPricesWrapper>
            <ItemPriceWithoutSale>{isSale ? `${price} $` : ''}</ItemPriceWithoutSale>
            <ItemPrice>{`${isSale ? Math.floor(price * 0.85) : price} $`}</ItemPrice>
          </ItemPricesWrapper>
        </WhiteHeaderContainer>
        <SectionTitle>Size</SectionTitle>
        <SizeList>
          {
            sizes.map((item, idx) => {
              if (idx == activeSizeId) {
                if (idx == sizes.length - 1) {
                  return (
                    <TouchableOpacity onPress={() => changeActiveSizeOfItem(id, idx)} >
                      <SizeListItem active last>
                        <SizeListItemValue active>{item}</SizeListItemValue>
                      </SizeListItem>
                    </TouchableOpacity>
                  )
                }
                return (
                  <TouchableOpacity onPress={() => changeActiveSizeOfItem(id, idx)} >
                    <SizeListItem active>
                      <SizeListItemValue active>{item}</SizeListItemValue>
                    </SizeListItem>
                  </TouchableOpacity>
                )
              } else if (idx == sizes.length - 1) {
                return (
                  <TouchableOpacity onPress={() => changeActiveSizeOfItem(id, idx)} >
                    <SizeListItem last>
                      <SizeListItemValue>{item}</SizeListItemValue>
                    </SizeListItem>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <TouchableOpacity onPress={() => changeActiveSizeOfItem(id, idx)} >
                    <SizeListItem>
                      <SizeListItemValue>{item}</SizeListItemValue>
                    </SizeListItem>
                  </TouchableOpacity>
                )
              }
            })
          }
        </SizeList>
        <SectionTitle>About</SectionTitle>
        <SectionDescripiton>{about}</SectionDescripiton>
        <ItemBottomWrapper>
          <ItemCountWrapper>
            <TouchableOpacity onPress={() => incrementCountOfItem(idItem)}>
              <icons.Plus />
            </TouchableOpacity>
            <CountItem>{count}</CountItem>
            <TouchableOpacity onPress={() => decrementCountOfItem(idItem)}>
              <icons.Minus />
            </TouchableOpacity>
          </ItemCountWrapper>
          <TouchableOpacity onPress={() => onAddToCart(idItem, id)}>
            <AddToCartBtn>
              <AddToCartBtnValue>ADD TO CART</AddToCartBtnValue>
            </AddToCartBtn>
          </TouchableOpacity>
        </ItemBottomWrapper>
      </wrappers.Container>
    </ScrollView>
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
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8B2833;
  margin-bottom: 5px;
`;

const ItemSpecDescription = styled.Text`
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
  background-color: ${props => !props.color ? "#C7051A" : props.color};
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
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #060608;
  margin-top: 9px;
`;

const ItemPriceWithoutSale = styled.Text`
  margin-top: 11px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;
  color: #C7051A;
  margin-right: auto;
`;

const SectionTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #060608;
  margin-bottom: 9px;
`;

const SectionDescripiton = styled.Text`
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
  background-color: ${props => props.active ? "#C7051A" : "#ffffff"};
  border: 2px solid ${props => props.active ? "#C7051A" : "rgba(254, 115, 138, 0.2)"};
  border-radius: 5;
  margin-right: ${props => props.last ? 0 : "10px"};
`;

const SizeListItemValue = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.active ? "#ffffff" : "rgba(0, 0, 0, 0.5)"};
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
  border-radius: 32;
`;

const AddToCartBtnValue = styled.Text`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
`;

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = {
  changeActiveColor: actionCreators.changeActiveColor,
  changeActiveSizeOfItem: actionCreators.changeActiveSizeOfItem,
  incrementCountOfItem: actionCreators.incrementCountOfItem,
  decrementCountOfItem: actionCreators.decrementCountOfItem,
  onAddToCart: actionCreators.onAddToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
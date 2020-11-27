import React from "react";
import { connect } from "react-redux";
import { Image, ScrollView } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";

import icons from "../../../assets/svg/icons";
import images from "../../../assets/img/images";
import wrappers from "../wrappers";

const CartPage = ({total, cartItems}) => {
  return (
    <ScrollView style={{contentSize: {height: 842}}} showsVerticalScrollIndicator={false} bounces={false}>
      <wrappers.Container height="80px" color="#FFB9C4" rounded="0 30 30 0" margins="0 0 50px 0" paddingTop="40px">
        <SectinoHeaderWrapper>
          <Link to="/">
            <icons.Return />
          </Link>
          <Total>{`Total: ${total} $`}</Total>
        </SectinoHeaderWrapper>
      </wrappers.Container>
      <wrappers.Container height="500px" color="#ffffff" rounded="0 0 0 0" margins="0 0 0 0" paddingTop="0"> 
        <CartItemsWrap>
          
          {
            cartItems.map(item => {
              return (
                <CartItemWrapper>
                  <CartItemImgWrapper>
                    <Image source={images[item.colorsImgs[item.activeImgId]]} style={{width: 55, height: 55}} />
                  </CartItemImgWrapper>
                  <CartItemDescriptionWrapper>
                    <CartItemTitle>{item.name}</CartItemTitle>
                    <CartItemPrice>{`${item.total} $`}</CartItemPrice>
                  </CartItemDescriptionWrapper>
                  <CartItemCountWrapper>
                  <CartItemCountValue>{item.count == 1 ? `1 item` : `${item.count} items`}</CartItemCountValue>
                  </CartItemCountWrapper>
                </CartItemWrapper>
              )
            })
          }
        </CartItemsWrap>
      </wrappers.Container>
    </ScrollView>
  )
};

const Total = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8B2833;
`;

const SectinoHeaderWrapper = styled.View`
  height: 17px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const CartItemsWrap = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CartItemWrapper = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  margin-bottom: 10px;
`;

const CartItemImgWrapper = styled.View`
  width: 65px;
  height: 65px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(192, 192, 192, 0.5);
  border-width: 1px;
  border-color: #FFB9C4;
  border-radius: 10px;
`;

const CartItemDescriptionWrapper = styled.View`
  width: 64%; 
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CartItemTitle = styled.Text`
  width: 100%;
  line-height: 14px;
  font-size: 11px;
  color: rgba(6, 6, 8, 0.5);
  margin-bottom: 10px;
`;

const CartItemPrice = styled.Text`
  font-size: 11px;
  line-height: 15px;
  color: #060608;
`;

const CartItemCountWrapper = styled.View`
  width: 45px;
  height: 14px;
  background-color: rgba(192, 192, 192, 0.3);
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CartItemCountValue = styled.Text`
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

const mapStateToProps = ({total, cartItems}) => {
  return {
    total,
    cartItems
  }
}

export default connect(mapStateToProps)(CartPage);
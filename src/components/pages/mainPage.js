import React from "react";
import { connect } from 'react-redux';
import { View, Image, TextInput, StyleSheet, ScrollView, Text } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";

import wrappers from "../wrappers";
import images from '../../../assets/img/images';
import icons from "../../../assets/svg/icons";
import HeartIcon from "../heartIcon";
import RateComponent from "../rateComponent";

const MainPage = ({items, loading}) => {
  if (loading) {
    return <Text>I'm sorry...</Text>
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <wrappers.Container height="264px" color="#FFB9C4" rounded="0 30 30 0" margins="0 0 0 0" paddingTop="36px">
        <HeaderPinkWrapper>
          <icons.Menu />
          <Link to="/cart">
            <icons.Cart />
          </Link>
        </HeaderPinkWrapper>
        <PinkTitleSection>Find your Favorite Items!</PinkTitleSection>
        <SearchPanelWrapper>
          <TextInput style={styles.searchPanel} placeholder="Search" /> 
          <FilterSettingsWrapper>
            <icons.FilterSettings />
          </FilterSettingsWrapper>
        </SearchPanelWrapper>
      </wrappers.Container>
      <wrappers.Container height="557px" color="#ffffff" rounded="0 0 0 0" margins="0 0 0 0" paddingTop="30px">
        <ScrollView style={{contentSize: {height: 76, width: "100%"}, marginBottom: 30}} horizontal={true}showsHorizontalScrollIndicator={false}>
          <CatalogItem>
            <icons.watch style={{marginBottom: 8}} />
            <CatalogItemTitle>Watch</CatalogItemTitle>
          </CatalogItem>
          <CatalogItem>
            <icons.jewellery style={{marginBottom: 8}} />
            <CatalogItemTitle>Jewellery</CatalogItemTitle>
          </CatalogItem>
          <CatalogItem>
            <icons.dresses style={{marginBottom: 8}} />
            <CatalogItemTitle>Dress</CatalogItemTitle>
          </CatalogItem>
          <CatalogItem>
            <icons.cosmetics style={{marginBottom: 8}} />
            <CatalogItemTitle>Cosmetics</CatalogItemTitle>
          </CatalogItem>
          <CatalogItem active > 
            <icons.bags style={{marginBottom: 8}} />
            <CatalogItemTitle active >Cosmetics</CatalogItemTitle>
          </CatalogItem>
        </ScrollView>
        <wrappers.SectionWrapper height="411px">
          <SectinoHeaderWrapper>
            <SectionTitle>Popular</SectionTitle>
            <ViewAllText>View All</ViewAllText>
          </SectinoHeaderWrapper>
          <wrappers.CardsWrapper height="211px" marginBottom="30px">
            {
              items.map(item => {
                if (item.isPopular) {
                  return (
                    <Link to={`items/${item.id}`}>
                      <wrappers.CardItemWrapper width="155px" height="211px" margins="0 20px 0 0" paddings="0 0 10px 20px" flDir="column">
                        <HeartIcon isActive={true} isAbsolutePos={true} posCoordinates="10px 0 0 10px" />
                        <Image source={images[item.colorsImgs[item.activeImgId]]} style={{width: 122, height: 131, marginBottom: 7}}/>
                    <CardItemBigTitle>{item.name}</CardItemBigTitle>
                        <RateComponent rate={item.rate} />
                        <CardItemPrice>{`$ ${item.isSale ? Math.floor(item.price * 0.85) : item.price}`}</CardItemPrice>
                      </wrappers.CardItemWrapper>
                    </Link>
                  )
                }
                return null
              })
            }
          </wrappers.CardsWrapper>
          <SectinoHeaderWrapper>
            <SectionTitle>Recommend</SectionTitle>
            <ViewAllText>View All</ViewAllText>
          </SectinoHeaderWrapper>
            <ScrollView style={{contentSize: {height: 98}}} horizontal={true} showsHorizontalScrollIndicator={false} >
              {
                items.map(item => {
                  if (item.isRecomended) {
                    return (
                      <Link to={`items/${item.id}`}>
                        <wrappers.CardItemWrapper width="223px" height="98px" margins="0 20px 0 0" paddings="0 0 10px 10px" flDir="row">
                          <HeartIcon isActive={false} isAbsolutePos={true} posCoordinates="10px 0 0 10px" />
                          <Image source={images[item.colorsImgs[item.activeImgId]]} style={{width: 74, height: 80, marginRight: 6}} />
                          <View style={{maxWidth: 81, height: 66, marginTop: 10}}>
                            <CardItemLittleTitle>{item.name}</CardItemLittleTitle>
                            <RateComponent rate={item.rate} />
                          </View>
                          <CardItemPrice>{`$ ${item.isSale ? Math.floor(item.price * 0.85) : item.price}`}</CardItemPrice>
                        </wrappers.CardItemWrapper>
                      </Link>
                    )
                  }
                  return null
                })
              }
            </ScrollView>
        </wrappers.SectionWrapper>
      </wrappers.Container>
    </ScrollView>
  )
}

const mapStateToProps = ({items, loading}) => {
  return {
    items,
    loading
  }
};

export default connect(mapStateToProps)(MainPage);

const styles = StyleSheet.create({
  searchPanel: {
    backgroundColor: "#ffffff", 
    width: 284, 
    height: 42, 
    borderRadius: 25,
    paddingLeft: 40,
    fontSize: 15,
    lineHeight: 18,
    color: "rgba(6, 6, 8, 0.5)"
  }
});

const HeaderPinkWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PinkTitleSection = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #8B2833;
  margin-bottom: 26px;
`;

const SectinoHeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchPanelWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const FilterSettingsWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50;
  justify-content: center;
  align-items: center;
`;

const CatalogItem = styled.View`
  border-radius: 5px;
  width: 75px;
  height: 76px;
  flex-direction: column;
  padding-top: 15px;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.last ? 0 : 10};
  background-color: ${props => props.active ? "#c7051a" : "#ffffff"};
`;

const CatalogItemTitle = styled.Text`
  font-weight: ${props => props.active ? "bold" : "normal"};
  font-size: 12px;
  line-height: 14px;
  color: rgba(6, 6, 8, 0.5);
  text-align: center;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #060608;
`;

const ViewAllText = styled.Text` 
  font-size: 14px;
  line-height: 16px;
  color: #C7051A;
`;

const CardItemBigTitle = styled.Text`
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  color: #060608;
  margin-bottom: 10px;
`;

const CardItemLittleTitle = styled.Text`
  max-width: 81px;
  font-size: 16px;
  line-height: 19px;
  color: #060608;
  margin-bottom: 7px;
`;

const CardItemPrice = styled.Text`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #060608;
`;
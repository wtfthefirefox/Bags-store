import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import wrappers from '../wrappers';
import icons from '../../assets/svg/icons';

const MainPage = () => {
  return (
    <>
      <wrappers.Container height="264px" color="#FFB9C4" rounded="0 30 30 0" margins="0 30px 0 0" paddingTop="46px">
        <HeaderPinkWrapper>
          <icons.Menu />
          <icons.Cart />
        </HeaderPinkWrapper>
        <PinkTitleSection>Find your Favorite Items!</PinkTitleSection>
        <SearchPanelWrapper>
          <TextInput style={styles.searchPanel} placeholder="Search" /> 
          <FilterSettingsWrapper>
            <icons.FilterSettings />
          </FilterSettingsWrapper>
        </SearchPanelWrapper>
      </wrappers.Container>
    </>
  )
}

const styles = StyleSheet.create({
  searchPanel: {
    backgroundColor: "#ffffff", 
    width: 284, 
    height: 42, 
    borderRadius: 25,
    paddingLeft: 40,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 18,
    color: "rgba(6, 6, 8, 0.5)",
  }
});

const HeaderPinkWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PinkTitleSection = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #8B2833;
  margin-bottom: 26px;
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

export default MainPage;
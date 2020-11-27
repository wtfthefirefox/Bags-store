import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeRouter , Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import { ItemPage, MainPage, CartPage } from './src/components/pages';

import { getItems } from './src/utils';

export default class App extends Component {
  componentDidMount() {
    getItems();
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <SafeAreaView style={{backgroundColor: "#ffb9c4"}}>
            <View style={{backgroundColor: '#ffffff'}}>
              <Switch>
                <Route exact path="/" >
                  <MainPage />
                </Route>
                <Route path="/items/:id" render={({match}) => {
                  const {id} = match.params;

                  return <ItemPage idItem={id - 1} />
                }}/>
                <Route path="/cart" component={CartPage} />
              </Switch>
            </View>
          </SafeAreaView>
        </NativeRouter>
      </Provider>
    )
  }
}
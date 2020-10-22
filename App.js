import React from 'react';
import { ItemPage, MainPage } from './components/pages';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { NativeRouter , Route, Switch } from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView style={{backgroundColor: "#ffb9c4"}}>
        <ScrollView style={{contentSize: {height: 812, width: 375}}}>
          <View style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/item" component={ItemPage} />
            </Switch>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeRouter>
  )
}

export default App;
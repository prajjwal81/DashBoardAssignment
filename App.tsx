import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainStack from './src/Navigation/Mainstack';
import Login from './src/screens/login';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import InitailComp from './src/InitailComp';

function App() {
  return (
    <Provider store={store}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <InitailComp />
        </SafeAreaView>
      </NavigationContainer>
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;

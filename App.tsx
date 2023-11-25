/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pointer from './assets/icons/pointer.svg'

import Home from './screens/home'
import Count from './screens/count'
import Footer from './components/footer'
import Header from './components/header'

const base = require('./colors')
const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  return (
    <NavigationContainer>
        <Header />
      <Stack.Navigator initialRouteName="Count">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Count" component={Count} options={{headerShown: false}}/>
      </Stack.Navigator>
        <Footer />
    </NavigationContainer>

  );
}





const styles = StyleSheet.create({
});



export default App;


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
import { ColorSchemeProvider } from './components/colorSchemeContext';

import Pointer from './assets/icons/pointer.svg'

import Home from './screens/home'
import Count from './screens/count'
import Encyclopedia from './screens/encyclopedia'
import BirdDetails from './screens/birdDetails'
import News from './screens/news'
import Bit from './screens/bit'
import Account from './screens/account'
import Footer from './components/footer'
import Header from './components/header'
import Heatmap from './screens/heatmap'
import Accessability from './screens/accessability'

const base = require('./colors')
const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  return (
    <NavigationContainer>
     <ColorSchemeProvider>
        <Header />
      <Stack.Navigator initialRouteName="HeatMap">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Count" component={Count} options={{headerShown: false}}/>
        <Stack.Screen name="Encyclopedia" component={Encyclopedia} options={{headerShown: false}}/>
        <Stack.Screen name="BirdDetails" component={BirdDetails} options={{headerShown: false}}/>
        <Stack.Screen name="News" component={News} options={{headerShown: false}}/>
        <Stack.Screen name="Bit" component={Bit} options={{headerShown: false}}/>
        <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>
        <Stack.Screen name="Accessability" component={Accessability} options={{headerShown: false}}/>
        <Stack.Screen name="HeatMap" component={Heatmap} options={{headerShown: false}}/>
      </Stack.Navigator>
        <Footer />
        </ColorSchemeProvider>
    </NavigationContainer>

  );
}





const styles = StyleSheet.create({
});



export default App;


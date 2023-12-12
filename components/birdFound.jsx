import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App(){
const base = require("../assets/colors")();
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  content: {
    marginLeft: 50,
  },
});
  return (
      <View>
        <Text style={[base.title, {alignSelf: 'center', marginBottom: 10}]}>Bird Found!</Text>
        <View style={styles.main}>
          <View style={styles.image}>
            <Image source={require('../assets/photos/birdFound.png')}/>
          </View>
          <View style={styles.content}>
            <Text style={[base['bold-18-black'],{textAlign: 'center', marginBottom: 20}]}>House Sparrow</Text>
            <Text style={base['regular-16-black']}>Added to bird count</Text>
          </View>
        </View>
      </View>
  )

}


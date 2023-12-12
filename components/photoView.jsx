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
import Pointer from '../assets/icons/pointer.svg';



export default function App () {
const base = require("../assets/colors")()
const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 500,
    backgroundColor: base.colors.white,
  },

  photo: {
    width: "100%",
    height: 300,
  },

  caption: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  type: {
    backgroundColor: base.colors.primary,
    marginLeft:-10,
    paddingHorizontal: 10,
  },

  image:{
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  location: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  mapView: {
    width: "100%",
    height: 80,
    marginTop: 5,
  },
  pointer: {
    position: "absolute",
    top: 25,
    left: 120,
  },
});

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image source={require('../assets/photos/photo1.png')} style={styles.image}/>
      </View>
      <View style={styles.caption}>
        <View style={styles.type}>
            <Text style={base['bold-18-white']}>Kingfisher</Text>
        </View>
        <Text style={base['bold-16-primary']}> Sat, 3 Nov 2023</Text>
      </View>
      <View style={styles.location}>
        <Text style={base['bold-16-primary']}>Location</Text>
        <View style={styles.mapView}>
          <Image source={require('../assets/photos/map.png')} style={styles.image} />
          <View style={styles.pointer}>
            <Pointer />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={base['bold-11-black']}>Earlham </Text>
          <Text style={base['regular-11-black']}>52.626, 1.235 </Text>
        </View>
      </View>


    </View>


  )
}


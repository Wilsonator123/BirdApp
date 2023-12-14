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
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back from "../assets/icons/back.svg";





export default function App( {route} ) {
const base = require("../assets/colors")();
  const navigator = useNavigation();
  const {bird} = route.params;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.accBackground,
    color: base.colors.background,
  },
  header: {
    backgroundColor: base.colors.secondary,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "column",
  },
  breadcrumb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    marginLeft: 25,
    marginBottom: 2,
  },
  image: {
    width: 300,
    height: 190,
    alignSelf: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  main:{
    flex: 1,
    alignItems: "center",
    color: base.colors.background,
  },
  birdName: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 30.24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  birdDesc: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'Nunito-Regular'
  },

  grid: {
    backgroundColor: "rgba(255,255,255,0.8)",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: 250,
    height: 200,
    marginBottom: 20,
    borderWidth: 1,
  },

  box: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 125,
    height: 100,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    padding: 5,
  },

  gridText: {
    color: base.colors.color,
    fontSize: 14,
    fontWeight: "bold",
  },

  circle: {
     width: 22,
     height: 22,
     borderRadius: 11,
     backgroundColor: 'red',
     padding: 5,
  },
  feathers: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: 5,
  },

})
  return (
    <View style={styles.container}>
      <View style={[base.bar,styles.header]}>
        <View style={styles.breadcrumb}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
              <Back
              width="50"
              height="33"
              fill={base.colors.primary}
              />
          </TouchableOpacity>
          <Text style={base['bold-18-primary']}>{bird.name}</Text>
        </View>
        <View>
            <Image source={bird.img} style={styles.image}/>
        </View>
      </View>

      <View style={styles.main}>
        <Text style={styles.birdName}>{bird.name}</Text>
        <Text style={styles.birdDesc}>{bird.description}</Text>
        <View style={styles.grid}>
        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          <View style={styles.box}>
            <Text style={styles.gridText}>Length</Text>
            <Text style={styles.gridText}>{bird.length}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.gridText}>Weight</Text>
            <Text style={styles.gridText}>{bird.weight}</Text>
          </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          <View style={styles.box}>
            <Text style={styles.gridText}>Feathers</Text>
            <View style={styles.feathers}>
              {bird.feathers.map((feather) => (
                <View key={feather} style={[styles.circle, {backgroundColor: feather}]}/>
              ))}
              </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.gridText}>Beak</Text>
            <View style={styles.feathers}>
            {bird.beak.map((beak) => (
              <View key={beak} style={[styles.circle, {backgroundColor: beak}]}/>
            ))}
            </View>
          </View>
        </View>
        </View>
      </View>

    </View>
  )
}


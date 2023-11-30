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

const base = require("../assets/colors")


export default function App({bird}){
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground source={bird.img} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{bird.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 175,
        height: 180,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
    },
    image:{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    textContainer:{
        position: "absolute",
        height: 22,
        width: 122,
        bottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: base.colors.primary,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical:0,
    },
    text:{
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    }
})
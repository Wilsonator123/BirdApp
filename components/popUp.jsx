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
import Close from '../assets/icons/close.svg';


export default function App( {children, close, customStyles } ){
const base = require("../assets/colors")()
const styles = StyleSheet.create({
    main: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    close: {
      position: "absolute",
      top: 3,
      right: 3,
      zIndex: 2,
    },
    container: {
        position: "relative",
        backgroundColor: base.colors.secondary,
        zIndex: 1,
    },
})

    const hide = () => {
      close();
    }


    return(
    <TouchableWithoutFeedback onPress={hide}>
        <View style={styles.main}>
            <View style={[styles.container, customStyles]}>
            <View style={styles.close}>
                <TouchableWithoutFeedback onPress={hide} >
                    <Close />
                </TouchableWithoutFeedback>
              </View>
              {children}

            </View>
        </View>
      </TouchableWithoutFeedback>

    )
}


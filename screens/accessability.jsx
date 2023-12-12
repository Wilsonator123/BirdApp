import React, { useContext } from 'react';
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
  Appearance,
} from 'react-native';
import AButton from '../components/aButton'
import { useNavigation } from '@react-navigation/native';



export default function App() {
const base = require('../assets/colors')()
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);


  const toggle = () => {
    setShow(!show);
  }

  const darkmode = () => {
  console.log("Nonce",Appearance.getColorScheme())
  Appearance.setColorScheme(Appearance.getColorScheme() === 'light' ? 'dark': 'light')

   }

  const [showSettings, setShowSettings] = React.useState(false);

    const toggleSettings = () => {
      setShowSettings(!showSettings);
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.accent,
    padding: 10,

    borderColor:base.colors.accent,
    borderWidth: 7,
  },
  accButton: {
  color: base.colors.accent,
  },

  title:{
  alignSelf: "center",
  fontSize:50,
  color:"white",
  fontWeight: "bold",
  backgroundColor: base.colors.primary,
  marginLeft:-5,
  paddingHorizontal:20,
  paddingVertical: 15,
    },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255,255,255,0.85)',
    marginVertical: 10,
  },

  innerBox: {
    width: "33%",
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 5,
    borderColor: base.colors.color,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  upload: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },

  month: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    width: 90,
    marginTop: 25,
    marginBottom: 10,
    paddingLeft: 5,
    marginLeft:-10,
  },
  image:{
    marginHorizontal: 10,
    width: 120,
    height: 120,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  textContainer:{
    position: "absolute",
    height: 15,
    width: "50%",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: base.colors.secondary,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical:0,
},
});
console.log("asdas",base.colors)
  return (
    <View style={[base.body, styles.container]}>
    <Text style={styles.title}>Accessibility Settings</Text>
    <Text/><Text/>

    <AButton
         onPress={darkmode}
         title="Dark Mode"
         buttonStyle={{ width: 350, height: 50 }}
       />
    <Text/><Text/>
        <AButton
             onPress={darkmode}
             title="Colour Pallet"
             buttonStyle={{ width: 350, height: 50 }}
           />

    <Text/><Text/>
        <AButton
             onPress={darkmode}
             title="Language"
             buttonStyle={{ width: 350, height: 50 }}
           />

    <Text/><Text/>
        <AButton
             onPress={darkmode}
             title="Font Size"
             buttonStyle={{ width: 350, height: 50 }}
           />
    <Text/><Text/>
        <AButton
             onPress={darkmode}
             title="Label Visibility"
             buttonStyle={{ width: 350, height: 50 }}
           />
  </View>
  );
}


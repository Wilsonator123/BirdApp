import React, { useContext, useState } from 'react';
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

const [colorPointer, setcolorPointer] = useState(0);
        const backgroundPal = [['#ffffff','#f9fbfb','#f5f8fb'],['#000000','#040606','#04080b']];
        const colorPal = [["#080a05",'#060809','#060809'],["#f8faf5",'#f6f8f9','#f6f8f9']];
        const primaryPal = [["#334620",'#6585a4','#579ab8'],["#ccdfb9",'#5b7a9a','#478aa9']];
        const secondaryPal = [["#d6e4c8",'#aba3c8','#d8a3c1'],["#29371b",'#3f375c','#5d2846']];
        const accentPal = [['#709749',"#9e8bbb",'#c9847e'],['#8fb668',"#574474",'#813c36']];

       /* if (colourScheme === "dark"){
                background = '#ffffff'; //light mode is here cuz accessibility page is inversed so yolo
                color = "#080a05";
                 primary = "#334620";
                 secondary = "#d6e4c8";
                 accent = "#709749";
        }else{
                 background = '#000000';
                 color = "#f8faf5";
                 primary = "#ccdfb9";
                 secondary = "#29371b";
                 accent = "#8fb668";
        }
*/


const [langPointer, setlangPointer] = useState(0);
const Dmode = [['Dark Mode','Dunkler Modus','Tryb ciemny','Mode sombre'],['Light Mode','Lichtmodus','Tryb światła','Mode lumière']]
const Cpallet = ['Colour Pallet','Farbpalette','Paleta kolorów','Palette de couleurs']
const langList = ['Language','Sprache','Język','Langue']
const fSize = ['Font Size','Schriftgröße','Rozmiar czcionki','Taille de police']
const LVisibility = ['Label Visibility','Sichtbarkeit des Etiketts','Widoczność etykiety','Visibilité des étiquettes']

const base = require('../assets/colors')()
const navigation = useNavigation();
const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  }

const [isDarkmode, SetisDarkmodePointer] = useState(0);

  const darkmode = () => {
  console.log("Darkmode: ",Appearance.getColorScheme())
  Appearance.setColorScheme(Appearance.getColorScheme() === 'light' ? 'dark': 'light')
  SetisDarkmodePointer(Appearance.getColorScheme() === 'light' ? 1: 0)

   }
    const colourPallet = () =>{
    if (colorPointer < primaryPal[isDarkmode].length - 1){
    setcolorPointer(colorPointer + 1)
    }else{
    setcolorPointer(0)
    }
    console.log("Colour Pointer Val: ",colorPointer)
    }

        const LangChanger = () =>{

        if (langPointer < langList.length -1 ){
        setlangPointer(langPointer + 1)
        }else{
        setlangPointer(0)
        }
            console.log("Lang Pointer Val: ",langPointer)
        }
  const [showSettings, setShowSettings] = React.useState(false);

    const toggleSettings = () => {
      setShowSettings(!showSettings);
    }

   const [fontSizesPointer, setfontSizes] = React.useState(0);

   const fontSizeList = [35,40,45,50,25,30]
                 console.log("fontSize: ",fontSizeList[fontSizesPointer])
   const fontSizeChanger = () => {

   if (fontSizesPointer < fontSizeList.length -1 ){
           setfontSizes(fontSizesPointer + 1)
           }else{
           setfontSizes(0)
           }

           }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: accentPal[isDarkmode][colorPointer],
    padding: 10,

    borderColor:accentPal[isDarkmode][colorPointer],
    borderWidth: 7,
  },
  accButton: {
  color: accentPal[isDarkmode][colorPointer],
  },

  title:{
  alignSelf: "center",
  fontSize:50,
  color:"white",
  fontWeight: "bold",
  backgroundColor: primaryPal[isDarkmode][colorPointer],
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
    borderColor: colorPal[isDarkmode][colorPointer],
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
    backgroundColor: secondaryPal[isDarkmode][colorPointer],
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical:0,
},
});
  return (
    <View style={[base.body, styles.container]}>
    <Text style={styles.title}>Accessibility Settings</Text>
    <Text/><Text/>

    <AButton
         onPress={darkmode}
         title={Dmode[isDarkmode][langPointer]}
         buttonStyle={{ width: 350, height: (fontSizeList[fontSizesPointer] + 15), backgroundColor: backgroundPal[isDarkmode][colorPointer]}}
         textStyle={{color: colorPal[isDarkmode][colorPointer], fontSize: fontSizeList[fontSizesPointer]}}
       />
    <Text/><Text/>
        <AButton
             onPress={colourPallet}
             title={Cpallet[langPointer] + " " + (colorPointer + 1)}
         buttonStyle={{ width: 350, height: (fontSizeList[fontSizesPointer] + 15), backgroundColor: backgroundPal[isDarkmode][colorPointer]}}
         textStyle={{color: colorPal[isDarkmode][colorPointer], fontSize: fontSizeList[fontSizesPointer]}}
           />

    <Text/><Text/>
        <AButton
             onPress={LangChanger}
             title = {langList[langPointer]}
         buttonStyle={{ width: 350, height: (fontSizeList[fontSizesPointer] + 15), backgroundColor: backgroundPal[isDarkmode][colorPointer]}}
         textStyle={{color: colorPal[isDarkmode][colorPointer], fontSize: fontSizeList[fontSizesPointer]}}
           />

    <Text/><Text/>
        <AButton
             onPress={fontSizeChanger}
             title={fSize[langPointer]}
         buttonStyle={{ width: 350, height: (fontSizeList[fontSizesPointer] + 15), backgroundColor: backgroundPal[isDarkmode][colorPointer]}}
         textStyle={{color: colorPal[isDarkmode][colorPointer], fontSize: fontSizeList[fontSizesPointer]}}
           />
    <Text/><Text/>
        <AButton
             onPress={darkmode}
             title={LVisibility[langPointer]}
         buttonStyle={{ width: 350, height: (fontSizeList[fontSizesPointer] + 15), backgroundColor: backgroundPal[isDarkmode][colorPointer]}}
         textStyle={{color: colorPal[isDarkmode][colorPointer], fontSize: fontSizeList[fontSizesPointer]}}
           />
  </View>
  );
}
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


export default function App() {
const base = require('../assets/colors')();
const styles = StyleSheet.create({
    mainBox: {
      marginVertical: 5,
      height: "65%",
    },
    subBox: {
      height: "33%",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 5,
      borderColor: 'red',
    },
    box:{
      backgroundColor:base.colors.primary,
      width:"48%",
      height:"100%",
    },
    boxText:{
      flex:1,
      padding: 5,
    }

});
    return (
        <View style={base.container}>
            <View style={styles.mainBox}>
                <ImageBackground source={require('../assets/photos/mainNews.png')} style={{width: '100%', height: '100%'}}>
                    <View style={{flex: 1, justifyContent: 'flex-end', margin:15}}>
                        <Text style={[base['bold-40-white'], {width: "55%", marginBottom: 10}]}>Big Garden Birdwatch</Text>
                        <Text style={base['bold-18-white']}>RSPB 07/11 </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.subBox}>
              <View style={styles.box}>
                <Image source={require('../assets/photos/news1.png')} style={{width:"100%", height:160}}/>
                <View style={styles.boxText}>

                  <Text style={base['bold-11-white']}>Gloucestershire-based Wildfowl and Wetlands Trust scoops £20k grant</Text>
                  <Text style={[base['bold-11-white'], {position: 'absolute', bottom:2, left: 5}]}>Gloucestershire Live 07/11</Text>
                  </View>
              </View>
              <View style={styles.box}>
                <Image source={require('../assets/photos/news2.png')} style={{width:"100%", height:160}}/>
                <View style={styles.boxText}>
                  <Text style={base['bold-11-white']}>As offshore wind stumbles, Biden moves to speed up solar and geothermal in the West</Text>
                  <Text style={[base['bold-11-white'], {position: 'absolute', bottom:2, left: 5}]}>Guardian 07/11</Text>
                </View>
              </View>
            </View>

        </View>
    );

}


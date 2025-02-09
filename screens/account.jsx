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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Settings from '../assets/icons/settings';
import Upload from '../assets/icons/upload';

import Popup from '../components/popUp';
import PhotoView from '../components/photoView';
import SettingView from '../components/settings'

export default function App() {
const base = require("../assets/colors")();
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  }

  const [showSettings, setShowSettings] = React.useState(false);

    const toggleSettings = () => {
      setShowSettings(!showSettings);
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.accBackground,
    padding: 10,
  },

  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#c14a09",
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: base.colors.accBox,
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
    backgroundColor: base.colors.accBox,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },

  month: {
    backgroundColor: base.colors.accBox,
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
    backgroundColor: base.colors.accBox,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical:0,
},
});
  return (
    <View style={[base.body, styles.container]}>
      <TouchableOpacity>
        <Settings width="35" height="35" fill="white" style={{position: 'absolute', alignSelf: 'flex-end', right:10, top:10}} onPress={toggleSettings}/>
      </TouchableOpacity>

            {showSettings &&
            <Popup close={toggleSettings}
            customStyles={{
              height: 500,
              width: 360,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              pointerEvents: 'none'
            }} >
              <SettingView />
            </Popup>
            }

      <View style={styles.userIcon}>
        <Text style={base['bold-50-white']}> N </Text>
      </View>
      <Text style={[base['bold-30-white'], {marginBottom: 10}]}> @George Nuts </Text>

      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> Submissions </Text>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> 15 </Text>
        </View>
        <View style={styles.innerBox}>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> Birds Counted </Text>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> 253 </Text>
        </View>
        <View style={styles.innerBox}>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> Date Joined </Text>
          <Text style={[base['bold-18-black'], {marginBottom: 10}]}> 15 Jan 2023 </Text>
        </View>
      </View>
      <View style={styles.photoGallery}>
        <View style={styles.header}>
          <Text style={[base['bold-30-white'], {textDecorationLine: 'underline'}]}>Your Photos</Text>
          <TouchableOpacity style={styles.upload}>
            <Text style={[base['bold-18-black'], {marginRight:5, paddingLeft: 5}]}>Upload</Text>
            <Upload />
          </TouchableOpacity>
        </View>
        <View style={styles.gallery}>
          <View style={styles.month}>
            <Text style={base['bold-20-black']}>Nov' 23</Text>
          </View>
          <TouchableOpacity style={{width: 120,height: 120}} onPress={toggle}>
            <ImageBackground source={require('../assets/photos/photo.png')} style={styles.image}>
              <View style={styles.textContainer}>
                <Text style={base['bold-11-black']}>Kingfisher</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

      </View>
      {show &&
      <Popup close={toggle}
      customStyles={{
        height: 500,
        width: 360,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        pointerEvents: 'none'
      }} >
        <PhotoView />
      </Popup>
      }
    </View>
  );
}


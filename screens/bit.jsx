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
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

import CameraIcon from '../assets/icons/bitCamera.svg';
import Close from '../assets/icons/close.svg';
const base = require('../assets/colors');


export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const [showCamera, setShowCamera] = React.useState(false)
  const navigation = useNavigation();
  requestPermission();

  const device = useCameraDevice('back')

   if (device == null) return <NoCameraDeviceError />
  return (
    <View style={base.body}>
      <View style={styles.header}>
        <Text style={base.title}>Bird Identification Tool</Text>
        <Text style={[base.text, {textAlign:'center'}]}>Simply take or upload a photo, and our AI system will provide you with the bird's species.
              Alternatively if the bird remains unidentified or you want to search yourself, navigate to our

              <Text onPress={() => navigation.navigate("Encyclopedia")} style={[base.text, { color: "blue", textAlignVertical: 'top', lineHeight: 20 }]}>{' '}encyclopaedia page{' '}</Text>

               for detailed manual searches.
        </Text>
      </View>

      <View style={styles.camera}>
        <TouchableOpacity style={styles.circle}>
          <CameraIcon
              width={70}
              height={70}
              fill={base.colors.primary}
              onPress={() => setShowCamera(true)}
            />
        </TouchableOpacity>
      </View>
      {showCamera &&
      <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
        <TouchableOpacity onPress={() => setShowCamera(false)} style={{position: 'absolute', top:5, left: 5}}>
          <Close width="30" height="30" fill="white"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowCamera(false)} style={{position: 'absolute', alignSelf: 'center', bottom: 25}}>
          <View style={{width: 90, height: 90, borderRadius: 50, borderWidth: 5, borderColor: 'white'}} />
        </TouchableOpacity>

      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  camera: {
    position: 'relative',
    width: 390,
    height: 390,
    backgroundColor: base.colors.primary,
    borderRadius: 25,
    margin: 10,
    justifyContent: 'center',
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: base.colors.secondary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
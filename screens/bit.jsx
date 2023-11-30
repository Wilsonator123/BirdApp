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
const base = require('../assets/colors');


export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const [showCamera, setShowCamera] = React.useState(true)
  requestPermission();

  const device = useCameraDevice('back')

   if (device == null) return <NoCameraDeviceError />
  return (
    <View style={{ flex: 1 }}>
    <Button
      title="Toggle Camera"
      onPress={() => showCamera ? setShowCamera(false) : setShowCamera(true) } />

    {showCamera &&
        <Camera
          style={{ flex: 1 }}
          device={device}
          isActive={true}
        />
    }


    </View>
    )


}
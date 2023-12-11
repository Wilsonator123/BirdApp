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
import Settings from '../assets/icons/settings';
const base = require("../assets/colors");

export default function App() {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  }
  return (
    <View style={[base.body, styles.container]}>
      <TouchableOpacity>
        <Settings width="35" height="35" fill="white" style={{position: 'absolute', alignSelf: 'flex-end', right:10, top:10}}/>
      </TouchableOpacity>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.colors.primary,
    padding: 10,
  },
});
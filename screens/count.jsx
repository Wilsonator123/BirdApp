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

import Bird from '../assets/icons/bird';
import Camera from '../assets/icons/camera';
import Remove from '../assets/icons/remove';
import Add from '../assets/icons/add';

const base = require("../colors")

const birds =
[
  {
     name: "House Sparrow",
     img: require("../assets/photos/sparrow.png"),
     count: 0,
  },
  {
    name: "Blue Tit",
    img: require("../assets/photos/blueTit.png"),
    count: 0,
  }

]

export default function App() {
  const [search, setSearch] = React.useState('');
  const navigator = useNavigation();



  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={base.body}>
        <View>
          <Text style={[base.title, styles.title]}>Enter a new count!</Text>
        </View>
        <View style={base.inputContainer}>
          <TextInput
          style={base.searchBar}
              onChangeText={setSearch}
              value={search}
              placeholder="Search for a count"
              placeholderTextColor="#f5f5f5"
          />
          <View style={{justifyContent: 'center', position:'relative'}}>
            <TouchableOpacity style={{justifyContent: 'center', position:'relative'}}>
              <Camera width="35" height="40" />
              <Bird width="20" height="20" style={{position: 'absolute', marginLeft: 7, marginTop: 1}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.birdContainer}>
          {birds.map((bird) => (
            <View key={bird.name} style={{width: 177, height: 172, justifyContent:"end", alignItems:"end"}} >
            <ImageBackground source={bird.img} resizeMode="cover" style={styles.birdCount} imageStyle={{opacity: 0.6}}>
              <Remove width="40" height="40" fill={base.colors.primary}/>
              <Text style={base['bold-40-primary']}>{bird.count}</Text>
              <Add width="40" height="40" fill={base.colors.primary}/>
            </ImageBackground>

            <View style={styles.birdName}>
              <Text style={base.birdName}>{bird.name}</Text>
            </View>
            </View>
          ))}
        </View>
    </View>
  </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: 30,
        marginBottom: 50,
    },
    birdContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
      marginTop: 20,
    },
    birdCount: {
      width: 177,
      height: 132,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingLeft: 10,
      paddingRight: 10,
    },
    birdName: {
      position: 'relative',
      width: 177,
      height: 45,
      backgroundColor: base.colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      color: base.colors.primary,
      fontWeight: 'bold',

    }
});
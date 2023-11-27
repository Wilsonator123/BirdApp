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
import Remove from '../assets/icons/remove';
import Add from '../assets/icons/add';
const base = require('../colors');


export default function App( {bird, updateBirdCount} ) {
  const [count, setCount] = React.useState(bird.count);

  const updateCount = (count) => {
    setCount((current => current + count));
    updateBirdCount(count);
  }

  return (
    <View key={bird.name} style={[ count === 0 ? styles.greyed : "", {width: 177, height: 172, justifyContent:"end", alignItems:"end", marginBottom: 21}]} >
      <ImageBackground source={bird.img} resizeMode="cover" style={styles.birdCount} imageStyle={{opacity: 0.6}}>
        <TouchableOpacity onPress={() => { count > 0 ? updateCount(-1) : updateCount(0)}}>
          <Remove width="40" height="40" fill={base.colors.primary}/>
        </TouchableOpacity>
        <Text style={base['bold-40-primary']}>{count}</Text>
        <TouchableOpacity onPress={() => updateCount(1)}>
          <Add width="40" height="40" fill={base.colors.primary}/>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.birdName}>
        <Text style={base.birdName}>{bird.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    },

    greyed: {
      opacity: 0.5,
    }
});
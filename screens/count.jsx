import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Bird from '../assets/icons/bird';
import Camera from '../assets/icons/camera';

import BirdCounter from '../components/birdCounter';

const base = require("../assets/colors")
const birds = require('../stubs/birds').birds;

export default function App() {
  const navigator = useNavigation();
  const [search, setSearch] = React.useState('');
  const [count, setCount] = React.useState(0);

  const updateBirdCount = (count) => {
    setCount(total => {
      return total+count
    })
  }

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
        <FlatList
        data={birds}
        renderItem={({item}) => (
          <BirdCounter bird={item} updateBirdCount={updateBirdCount}/>
        )}
        keyExtractor={item => item.name}
        columnWrapperStyle={styles.birdContainer}
        numColumns={2}
        />
        <View style={styles.submit}>
          <Button title="submit" disabled={count===0} color={base.colors.primary}>
          <Text>Submit</Text>
          </Button>
        </View>
    </View>
  </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: 30,
        marginBottom: 30,
    },
    birdContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',

    },
    submit: {
      marginTop: 20,
      marginBottom: 20,
      width: "87%",
      alignSelf: 'center',
    }


});

/*
if(count === 0){
      setBirdCounts(counts => {
        const copy = {...counts}
        delete copy[bird];
        return copy
      });
    }
    else{
      setBirdCounts((prevCounts) => ({
        ...prevCounts,
        [bird]: count,
      }));
    }

    */

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
import Tick from '../assets/icons/tick';

import BirdCounter from '../components/birdCounter';
import Popup from '../components/popUp';


const birds = require('../stubs/birds').birds;

export default function App() {
  const navigator = useNavigation();
  const [search, setSearch] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [submit, setSubmit] = React.useState(false);

  const toggleSubmit = () => {
    setSubmit(!submit);
    navigator.navigate('Home');
  }

  const updateBirdCount = (count) => {
    setCount(total => {
      return total+count
    })
  }
const base = require("../assets/colors")()
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
    },

    circle: {
      width: 80,
      height: 80,
      borderRadius: 80/2,
      backgroundColor: base.colors.primary,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
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
            <TouchableOpacity onPress={() => navigator.navigate('Bit')}style={{justifyContent: 'center', position:'relative'}}>
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
          <Button title="submit" disabled={count===0} color={base.colors.primary} onPress={() => setSubmit(true)}>
            <Text>Submit</Text>
          </Button>
        </View>
        {submit &&
        <Popup close={toggleSubmit}
        customStyles={{width: 360, height: 200}}>
        <View style={{alignItems: 'center'}}>
          <Text style={[base.title, {marginTop: 10}]}>Count submitted!</Text>
          <Text style={[base['bold-11-black'], {marginTop: 10, textAlign: 'center', width: "60%"}]}>Thank you for submitting your count!
                We’ll take it from here.   </Text>
          <TouchableOpacity onPress={toggleSubmit}>
            <View style={styles.circle} >
              <Tick width="60" height="60" fill="white"/>
            </View>
          </TouchableOpacity>
        </View>

        </Popup>
        }
    </View>
  </TouchableWithoutFeedback>


  );
}



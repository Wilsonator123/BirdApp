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

const base = require('../assets/colors');
const birds = require('../stubs/birds').birds;
import BirdCard from '../components/birdCard';
import Filter from '../assets/icons/filter';


export default function App() {
  return (
    <View style={base.body}>
      <View style={styles.title}>
        <Text style={base.title}>Encyclopedia</Text>
        <TouchableOpacity>
          <Filter
            width="40"
            height="40"
            fill={base.colors.primary}
          />
        </TouchableOpacity>
      </View>
      <FlatList
      data={birds}
      renderItem={({item}) => (
        <BirdCard key={item.name}bird={item} />
      )}
      keyExtractor={item => item.name}
      columnWrapperStyle={styles.birdContainer}
      numColumns={2}
      >
      </FlatList>
    </View>

  );
}


const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  birdContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',

  },
});
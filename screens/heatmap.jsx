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
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Popup from '../components/popUp';
import EastAnglia from '../assets/map/East Anglia';
import EastMidlands from '../assets/map/East Midlands';
import London from '../assets/map/London';
import North from '../assets/map/North';
import NorthWest from '../assets/map/North West';
import SouthWest from '../assets/map/South West';
import WestMidlands from '../assets/map/West Midlands';
import York from '../assets/map/York';

const mapData = require('../stubs/maps').maps;
const base = require("../assets/colors");

export default function App() {
  const five = "#e93e3a";
  const four = "#ed683c";
  const three = "#f3903f";
  const two = "#fdc70c";
  const one = "#fff33b";
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState(undefined);

  const togglePopup = (name, location) => {
    const areaData = mapData.find((data) => data.id === name);
    const x = location.pageX > 250 ? location.pageX-250 : location.pageX-170;
    areaData['location'] = [x, location.pageY-150];
    setData(areaData);
    setShow(!show);
  };

  return (

    <View style={styles.container}>
    <View style={{marginLeft: -100, width:500, height: 600}}>
      <ImageBackground source={require('../assets/map/map.png')} style={styles.map}>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('north', e.nativeEvent)}>
      <View style={{position: 'absolute', top: 196, right: 112, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2}]}>North</Text>
        <North width="120" height="120" fill={two} style={{zIndex: 1}}/>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('york', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:225, right: 75, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, paddingBottom: 7}]}>Yorkshire</Text>
        <York width="110" height="110" fill={four} style={{zIndex: 1}}/>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('northWest', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:210, left: 280, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, width: 40, paddingLeft:5}]}>North West</Text>
        <NorthWest width="80" height="85" fill={three} style={{zIndex: 1, textAlign:'center'}}/>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('eastMidlands', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:145, right: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, width: 70, textAlign: 'center', paddingBottom: 20}]}>East Midlands</Text>
        <EastMidlands width="120" height="120" fill={four} style={{zIndex: 1}}/>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('eastAnglia', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:137, right: -5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2}]}>East Anglia</Text>
        <EastAnglia width="100" height="100" fill={five} style={{zIndex: 1}} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('westMidlands', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:130, left: 286, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, width: 70, textAlign:'center'}]}>West Midlands</Text>
        <WestMidlands width="100" height="100" fill={two} style={{zIndex: 1}}/>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('southEast', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:38, right: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, paddingRight: 20}]}>South East</Text>
        <London width="150" height="150" fill={one} style={{zIndex: 1}}/>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={(e) => togglePopup('southWest', e.nativeEvent)}>
      <View style={{position: 'absolute', bottom:-15, left: 188, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[base['bold-14-black'], {position: 'absolute', zIndex: 2, paddingLeft: 50, paddingTop: 13}]}>South West</Text>
        <SouthWest width="185" height="185" fill={five} style={{zIndex: 1}}/>
      </View>
      </TouchableWithoutFeedback>
      </ImageBackground>

    </View>

     {show &&
      <Popup
        data={data}
        close={() => setShow(false)}
        customStyles={{position: 'absolute', top: data.location[1], left: data.location[0], width: 250, height: 200}}
      >
        <View style={styles.popup}>
          <Text style={[base['bold-20-black'], {paddingBottom: 10, textDecorationLine: 'underline'}]}>{data.name}</Text>
          <Text style={[base['regular-16-black'], {paddingBottom: 10}]}>No. Submissions: {data.submissions}</Text>
          <Text style={[base['regular-16-black'], {paddingBottom: 10}]}>Birds Counted: {data.birdsCounter}</Text>
          <Text style={[base['regular-16-black'], {paddingBottom: 10}]}>Last Updated: {data.lastUpdated}</Text>
          <Button title="Export Data" style={{width:10, height:10}} color={base.colors.primary}>Export Data </Button>
        </View>

      </Popup>
     }
    <View style={{width: 350, marginLeft: 27, marginTop: 30}}>
        <Button title="Export Data" color={base.colors.primary}/>
    </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',

  },

  map: {
    flex: 1,
    resizeMode: "contain",
    width: '100%',
    height: '100%',
  },

  popup: {
    padding: 10,
    width: "100%",
    height: "100%",
  }

});
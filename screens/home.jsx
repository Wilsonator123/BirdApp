import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

const base = require('../colors')

function App(): JSX.Element {
    const [coordinates, setCoordinates] = React.useState([1.236603,52.635453]);
    const onDrag = (e) => {
        console.log(e.geometry.coordinates);
        setCoordinates(e.geometry.coordinates);
    }


  return (
      <View style={base.body}>
            <View style={base.main}>
            <MapView
            style={styles.map}
              initialRegion={{
                latitude: 52.635453,
                longitude: 1.236603,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
              }}
            />

            </View>
  </View>
  );
}

const CountButton = () => {
    return (
        <View>
            <Text style={base.buttonText}>Start count</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        margin: 5,
    },

})


export default App;
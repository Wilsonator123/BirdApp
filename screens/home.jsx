import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
Text,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
const pointer = require('../assets/pointer1-0.png');



function App(): JSX.Element {
    const base = require('../assets/colors')()
    const styles = StyleSheet.create({
      map: {
          flex: 1,
          margin: 5,
      },
      callout: {
          backgroundColor: base.colors.primary,
          padding: 10,
          borderRadius: 10,
          width: 100,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
      }
    })
    const [coordinates, setCoordinates] = React.useState({latitude: 52.635453, longitude: 1.236603});
    const [showCallout, setShowCallout] = React.useState(false);
    const navigator = useNavigation();

    const CustomCallout = () => {
        return (
            <Callout onPress={() => navigator.navigate("Count")} >
                <View style={styles.callout}>
                    <Text style={{fontSize: 16,
                    fontFamily: 'PTSans-Bold', color: 'white'}}>
                    Start Count</Text>
                </View>
            </Callout>
        )
    }


  return (
      <View style={[base.body, {zIndex: 1}]}>
            <View style={base.main}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 52.635453,
                    longitude: 1.236603,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.005,
                  }}
                >

                <Marker
                    coordinate={coordinates}
                    draggable
                    style={{backgroundColor: base.colors.primary}}
                    image={pointer}
                   >
                        <CustomCallout />
                    </Marker>
                </MapView>

            </View>
    </View>
  );
}





export default App;
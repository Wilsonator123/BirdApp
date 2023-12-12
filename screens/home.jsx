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
const base = require('../assets/colors')


function App(): JSX.Element {
    const [coordinates, setCoordinates] = React.useState({latitude: 52.635453, longitude: 1.236603});
    const [showCallout, setShowCallout] = React.useState(false);
    const navigator = useNavigation();

    const CustomCallout = () => {
        return (
            <Callout onPress={() => navigator.navigate("Count")} >
                <View style={styles.callout}>
                    <Text style={base['bold-16-white']}>Start Count</Text>
                </View>
            </Callout>
        )
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


const styles = StyleSheet.create({
    map: {
        flex: 1,
        margin: 5,
    },

    callout: {
        width: 110,
        height: 35,
        backgroundColor: base.colors.primary,
        color: base.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})


export default App;
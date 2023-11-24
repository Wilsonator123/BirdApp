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
const base = require('../colors')

function App(): JSX.Element {
    const [coordinates, setCoordinates] = React.useState([1.236603,52.635453]);
    const [showCallout, setShowCallout] = React.useState(false);
    const navigator = useNavigation();

  return (
      <View style={base.body}>
            <View style={base.main}>
                <MapView
                style={styles.map}
                  initialRegion={{
                    latitude: coordinates[1],
                    longitude: coordinates[0],
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.005,
                  }}
                >
                   <Marker
                        coordinate={{latitude: coordinates[1], longitude: coordinates[0]}}
                        draggable
                        onDragEnd={() => setShowCallout(true)}
                        onDragStart={() => setShowCallout(false)}
                        image={pointer}
                     >
                     {showCallout && <CustomCallout />}
                    </Marker>
                </MapView>

            </View>
    </View>
  );
}

const CustomCallout = () => {
    return (
        <Callout onPress={() => navigator.navigate("Count")}>
            <View>
                <Text>Custom Callout</Text>
            </View>
        </Callout>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        margin: 5,
    },
})


export default App;
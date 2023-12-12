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
    const [coordinates, setCoordinates] = React.useState([1.236603,52.635453]);
    const [showCallout, setShowCallout] = React.useState(false);
    const navigator = useNavigation();

    const CustomCallout = () => {
        return (
            <Callout onPress={() => navigator.navigate("Count")}>
                <View>
                    <Text>Start Count</Text>
                </View>
            </Callout>
        )
    }

const base = require('../assets/colors')()
const styles = StyleSheet.create({
    map: {
        flex: 1,
        margin: 5,
    },
})
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
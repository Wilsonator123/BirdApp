import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Fireworks from '../assets/icons/fireworks.svg';
const pointer = require('../assets/pointer1-0.png');



export default function Notification(): JSX.Element {
    const base = require('../assets/colors')()
    const styles = StyleSheet.create({
        base: {
          flex: 1,
          backgroundColor: base.background,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
        container: {
          flex: 1,
          margin: 10,
          width: '95%',
          backgroundColor: base.colors.primary,
          borderRadius: 8,
          alignItems: 'center',
        },
        notification: {
          backgroundColor: base.colors.secondary,
          borderRadius: 8,
          height: 170,
          width: '95%',
          marginTop: 10,
          padding: 24,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        },
        title: {
          color: base.colors.color,
          fontSize: 24,
          fontWeight: 'bold',
        },
        description: {
          color: base.colors.color,
          fontSize: 16,
          textAlign: 'center',
        },
      });
    const navigation = useNavigation();

    return (

    <View style={styles.base}>
      <View style={styles.container}>
        <View style={styles.notification}>
          <Text style={styles.title}>January Count Results </Text>
          <Text style={styles.description}>See the latest results from our bird survey</Text>
          <Button title="Go to results" onPress={() => navigation.navigate("HeatMap")}/>
        </View>
        <View style={styles.notification}>
          <Fireworks style={{position: 'absolute', top: 5, left:8}}/>
          <Fireworks style={{position: 'absolute', top: 5, right:8}}/>
          <Text style={styles.title}>Congratulations on 3-months</Text>
          <Button title="Claim"/>
        </View>
      </View>
    </View>
    );
}


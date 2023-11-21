/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Account from './assets/icons/account.svg'
import Mail from './assets/icons/mail.svg'
const base = require('./colors')

function App(): JSX.Element {

  return (
  <View style={base.body}>
    <View style={[base.bar, styles.navBar]}>
        <View>
            <Account
                width="50"
                height="50"
                fill={base.colors.primary}
            />
        </View>
        <View>
            <Mail
                width="50"
                height="50"
                fill={base.colors.primary}
            />
        </View>
    </View>
    <View style={base.main}>
        <Text style={base.text}>I am also here</Text>
    </View>
    <View style={[base.bar, styles.footer]}>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        paddingRight: 20,
        paddingLeft: 20,
        fontWeight: '600'
    },
    navLink:{
        color: base.colors.primary
    },

    footer: {
        height: 60,
    }
})


export default App;

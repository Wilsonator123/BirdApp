import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Account from '../assets/icons/account.svg'
import Mail from '../assets/icons/mail.svg'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const base = require('../colors')

export default function Header() {
    const navigation = useNavigation();


    return (
        <View style={[base.bar, styles.navBar]}>
            <TouchableOpacity onPress={()=> navigation.navigate('Account')}>
                <View>
                    <Account
                        width="50"
                        height="50"
                        fill={base.colors.primary}
                    />
                </View>
            </TouchableOpacity>
            <View>
                <Mail
                    width="50"
                    height="50"
                    fill={base.colors.primary}
                />
            </View>
        </View>
        )
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
    }
})
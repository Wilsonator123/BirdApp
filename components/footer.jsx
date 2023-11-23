import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Pin from '../assets/icons/pinDrop.svg'
import Ency from '../assets/icons/ency.svg'
import News from '../assets/icons/news.svg'
import Line from '../assets/icons/line.svg'
import { useNavigation } from '@react-navigation/native';
const base = require('../colors')



export default function Footer() {
    const navigation = useNavigation();
    return (
        <View style={[base.bar, styles.footer]}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Pin
                style={styles.footerIcon}
                width="50"
                height="50"
                fill={base.colors.primary}
                />
            </TouchableOpacity>
            <Line
            width="20"
            height="50"
            fill='red'
            />
            <TouchableOpacity onPress={() => navigation.navigate('Encyclopedia')}>
            <Ency
            style={styles.footerIcon}
            width="50"
            height="50"
            fill={base.colors.primary}
            />
            </TouchableOpacity>
            <Line
                width="20"
                height="50"
                fill='red'
            />
            <TouchableOpacity onPress={() => navigation.navigate('News')}>
            <News
               style={styles.footerIcon}
               width="50"
               height="50"
               fill={base.colors.primary}
            />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width:'100%',
        height: 60,
        justifyContent: 'space-evenly',
    }
})
'use strict';

import { StyleSheet } from 'react-native';

const background = '#ffffff';
const color = "#080a05";
const primary = "#334620";
const secondary = "#d9e7cb";
const accent = "#8fb668";

module.exports = StyleSheet.create({
    colors: {
        backgroundColor: background,
        color: color,
        primary: primary,
        secondary: secondary,
        accent: accent,
    },
    body: {
        flex:1,
        fontFamily: 'Nunito-Regular',
        backgroundColor: background,
        width: '100%',
    },
    main: {
        flex: 1,
        fontFamily: 'Nunito-Regular'
    },
    bar: {
        backgroundColor:  secondary,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputContainer: {
        width: '80%',
        marginLeft: "10%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: primary,
        marginBottom: 10
    },

    searchBar: {
        width: '87%',
        alignItems: 'center',
        color: background,
        includeFontPadding: false,
        paddingVertical:3,
        fontSize: 16,
    },

    title: {
            fontFamily: 'PTSans-Bold',
            fontSize: 30.24,
            color: color
    },

    'bold-18-primary': {
      fontSize: 18,
      fontFamily: 'PTSans-Bold',
      color: primary
    },

    'regular-18-black': {
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        color: color
    },

    'bold-16-black': {
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: color
    },

    text: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
        color: color
    },

    'regular-10-black': {
        fontFamily: 'Nunito-Regular',
        fontSize: 9.6,
        color: color
    },

    'bold-40-primary': {
        fontSize: 40.32,
        fontFamily: 'PTSans-Bold',
        color: primary
    },


})

//
//@media (prefers-color-scheme: dark) {
//  :root {
//    --text: #f8faf5;
//    --background: #000000;
//    --primary: #ccdfb9;
//    --secondary: #29371b;
//    --accent: #8fb668;
//  }
//}
//@import url('https://fonts.googleapis.com/css?family=PT Sans:700|Nunito:400');
//
//body {
//  font-family: 'Nunito';
//  font-weight: 400;
//}
//
//h1, h2, h3, h4, h5 {
//  font-family: 'PT Sans';
//  font-weight: 700;
//}
//
//html {font-size: 100%;} /* 16px */
//
//h1 {font-size: 3.366rem; /* 53.92px */}
//
//h2 {font-size: 2.525rem; /* 40.32px */}
//
//h3 {font-size: 1.894rem; /* 30.24px */}
//
//h4 {font-size: 1.421rem; /* 22.72px */}
//
//h5 {font-size: 1.066rem; /* 17.12px */}
//
//small {font-size: 0.600rem; /* 9.6px */}

//https://www.realtimecolors.com/?colors=080a05-ffffff-334620-d9e7cb-709749&fonts=Poppins-Poppins
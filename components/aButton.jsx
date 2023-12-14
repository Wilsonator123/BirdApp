import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const AButton = ({ onPress, title, buttonStyle, textStyle }) => {
const base = require('../assets/colors')()
const styles = StyleSheet.create({
  button: {

    padding: 1,
    borderRadius: 7,
    alignItems: 'center',
    left:15,

  },
  buttonText: {
    fontWeight: 'bold',
  },
});
  return (

    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};



export default AButton;

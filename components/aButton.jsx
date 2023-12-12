import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const AButton = ({ onPress, title, buttonStyle }) => {
const base = require('../assets/colors')()
const styles = StyleSheet.create({
  button: {
    backgroundColor: base.colors.primary,
    padding: 1,
    borderRadius: 7,
    alignItems: 'center',
    left:15,

  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
console.log("buttonss",base.colors.primary)
  return (

    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default AButton;

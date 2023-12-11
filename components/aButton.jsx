import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const base = require('../assets/colors')

const AButton = ({ onPress, title, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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

export default AButton;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function Button({submit, authentication}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        authentication();
      }}>
      <Text style={styles.buttonText}>{submit}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#860063',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: 'white',
  },
});
export default Button;

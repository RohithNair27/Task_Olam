import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Card({onTouch, axios}) {
  return (
    <TouchableOpacity
      style={styles.cards}
      onPress={() => {
        onTouch(axios);
      }}>
      <View style={styles.cardTextView}>
        <Text style={styles.cardText}>{axios.id}</Text>
        <Text style={styles.cardText}>{axios.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardTextView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    backgroundColor: '#860063',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 25,
  },
});
export default Card;

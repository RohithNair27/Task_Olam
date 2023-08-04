import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Card from '../components/Card';
import axios from 'axios';
import {BallIndicator} from 'react-native-indicators';

function List({navigation}) {
  const [data, setData] = useState(null);

  const NAVIGATE = axios => {
    navigation.navigate('Discription', {
      cardsData: axios,
    });
  };
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(element => {
        setData(element.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.List}>
      {data === null ? (
        <BallIndicator />
      ) : (
        <ScrollView style={styles.ScrollView}>
          {data.map(element => {
            return (
              <View style={styles.card} key={element.id}>
                <Card onTouch={NAVIGATE} axios={element} />
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '80%',
    height: 300,
    left: '10%',
    top: 20,
    marginBottom: 10,
    paddingBottom: 10,
  },
  List: {
    height: '100%',
    width: '100%',
  },
  ScrollView: {
    position: 'absolute',
    height: 800,
    width: '100%',

    top: 10,
    bottom: 10,
  },
});

export default List;

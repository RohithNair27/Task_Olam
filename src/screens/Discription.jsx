import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

function Discription({route, navigation}) {
  const {cardsData} = route.params;

  useEffect(() => {
    console.log(cardsData);
  }, []);
  return (
    <View style={styles.fullPage}>
      <View style={styles.card}>
        <Card axios={cardsData} />
      </View>
      <View style={styles.decide}>
        <View style={styles.accept}>
          <Button submit={'Accept'} />
        </View>
        <View style={styles.Reject}>
          <Button submit={'Reject'} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fullPage: {
    height: '100%',
  },
  decide: {
    height: '5%',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  accept: {
    height: '100%',
    width: '45%',
    position: 'relative',
    right: '10%',
  },
  card: {
    position: 'absolute',
    width: '80%',
    top: '20%',
    height: 300,
    left: '10%',
    marginBottom: 10,
    paddingBottom: 10,
  },
  Reject: {height: '100%', width: '45%', position: 'relative', right: '10%'},
});
export default Discription;

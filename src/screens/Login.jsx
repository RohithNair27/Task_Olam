import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth';

import {Message} from '../utils/notificationServices';

function Login({navigation}) {
  const [gmail, setGmail] = useState(null);
  const [password, setPassword] = useState(null);

  const typeAuthEmail = authInfo => {
    setGmail(authInfo);
  };
  const typeAuthPassword = authInfo => {
    setPassword(authInfo);
  };

  let g = 'testuser@gmail.com';
  let p = 'test@123';
  const authentication = () => {
    if (g !== null && p !== null) {
      auth()
        .signInWithEmailAndPassword(g, p)
        .then(() => {
          navigation.navigate('List');
        })
        .catch(() => {
          console.log('not working');
        });
    } else {
      console.log('enter password properly and submit');
    }
  };

  useEffect(() => {
    Message();
  }, []);

  return (
    <View style={styles.loginPage}>
      <Image style={styles.logo} source={require('../images/ofi.png')} />
      <View style={styles.SearchBar}>
        <SearchBar placeHolder={'Username'} authInfo={typeAuthEmail} />
        <SearchBar
          placeHolder={'Password'}
          secure={true}
          authInfo={typeAuthPassword}
        />
      </View>
      <View style={styles.submit}>
        <Button submit={'Submit'} authentication={authentication} />
      </View>

      <Text style={styles.appVersion}>App version : 0.0.1</Text>
    </View>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  loginPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    backgroundColor: 'white',
  },
  SearchBar: {
    position: 'absolute',

    height: '20%',
    width: '80%',
    position: 'absolute',
    top: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  submit: {
    maxHeight: 40,

    width: '75%',
    position: 'relative',
    top: '10%',
  },
  logo: {
    position: 'absolute',
    top: '1%',
    resizeMode: 'contain',
    width: '50%',
  },
  appVersion: {
    color: 'black',
    position: 'absolute',
    bottom: '15%',
  },
  getNotifaction: {
    height: 40,
    position: 'absolute',
    bottom: '30%',
    width: '75%',
  },
});

export default Login;

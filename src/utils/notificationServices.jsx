import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PermissionsAndroid} from 'react-native';

export const Message = () => {
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  ).then(granted => {
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('granted');
      GetToken();
    } else {
      console.log('not granted');
    }
  });
};

//using device token and storing it in async storage
const GetToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, ' old token');
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken(); // device token
      if (fcmToken) {
        console.log('new token', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log('no token', error.Message);
    }
  }
};

import React, {useContext, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function SearchBar({placeHolder, secure, authInfo}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.SearchBar}>
      <TextInput
        style={{color: 'black'}}
        value={text}
        onChange={event => {
          setText(event.nativeEvent.text);
        }}
        onEndEditing={() => {
          authInfo(text);
        }}
        placeholder={placeHolder}
        placeholderTextColor={'lightgray'}
        secureTextEntry={secure}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  SearchBar: {
    color: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: '2%',
    paddingRight: '2%',
    borderColor: 'gray',
  },
});
export default SearchBar;

import {
  Button,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {login} from '../Redux/features/Globalslice';
import {useDispatch} from 'react-redux';
import { addItem } from '../utils/storage';

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const loginHandler =async () => {
    await dispatch(login({name, pass}));
    addItem({name,pass})
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/splashScreen.png')}
        style={{position: 'absolute'}}
      />
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your Name"
        style={styles.input}
        placeholderTextColor={'black'}
        multiline={true}
      />
      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="Your password"
        style={styles.input}
        placeholderTextColor={'black'}
        multiline={true}
      />

      <Pressable onPress={loginHandler} style={styles.btn}>
        <Text style={{color: 'white'}}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '110%',
    height: '98%',
  },
  input: {
    width: '90%',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    zIndex: 10,
    fontSize: 15,
    height: 50,
  },
  btn: {
    width: '90%',
    backgroundColor: 'green',
    height: Dimensions.get('window').height / 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

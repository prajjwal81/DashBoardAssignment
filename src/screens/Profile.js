import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clear, clearParticularItem } from '../Redux/features/Globalslice';

export default function Profile() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(clear())
  };

  const deleteHandler = () => {
    dispatch(clearParticularItem())

  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.profile} />
        <Text style={styles.text}>Prajjwal</Text>
      </View>
      <Pressable style={[styles.btn]} onPress={logoutHandler}>
        <Text style={styles.btnText}>Logout</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, {borderColor: 'red'}]}
        onPress={deleteHandler}>
        <Text style={[styles.btnText, {color: 'red'}]}>Delete Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontWeight: '700',
    marginTop: 20,
  },
  btn: {
    width: '90%',
    height: Dimensions.get('window').height / 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    marginTop: '5%',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
  },
});

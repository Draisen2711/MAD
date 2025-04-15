import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from './component/Input';
import Button from './component/Button';
import Title from './component/title.tsx';

const Exercise3 = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign in Google" color="red" />
      <Button label="Sign in Facebook" color="blue" />
      <Button label="Sign in Apple" color="black" />
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from './component/Input';
import Button from './component/Button';
import Title from './component/title.tsx';

const Exercise5 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log({username, password});
  };

  return (
    <View style={styles.container}>
      <Title text="Welcome" />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Button label="Sign in Google" onPress={onSubmit} />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});

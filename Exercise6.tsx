import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from './component/Input';
import Button from './component/Button';
import Title from './component/title.tsx';

const Exercise6 = () => {
  const [username, setUsername] = useState('');
  const [nama, setUsernama] = useState('');
  const [email, setUseremail] = useState('');
  const [addres, setUseraddres] = useState('');
  const [nomor, setUsernomor] = useState('');

  const onSubmit = () => {
    console.log({username, nama, email, addres, nomor});
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <Input
        label="Nama"
        placeholder="Masukan nama lengkap anda anda"
        onChangeText={e => setUsernama(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={e => setUseremail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={e => setUseraddres(e)}
      />
      <Input
        label="phone number"
        placeholder="Masukan nomor telepon anda"
        onChangeText={e => setUsernomor(e)}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});

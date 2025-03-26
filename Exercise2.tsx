import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Draisen Rey</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Hahahah</Text>
        <Image style={styles.asen} source={require('./pepe/logo.png')} />
        <Text style={styles.subTitle}>syangggg sayangggg</Text>
        <Image style={styles.asen} source={require('./pepe/tesa.jpg')} />
        <Image style={styles.asen} source={require('./pepe/tesa1.jpg')} />
        <Image
          style={styles.asen2}
          source={{
            uri: 'https://e0.pxfuel.com/wallpapers/633/982/desktop-wallpaper-tengkorak-keren-group-for-tengkorak-logo-keren-animasi.jpg',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Supaya tampilan sesuai layar
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    width: 300,
  },
  button: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  asen: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  asen2: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
});

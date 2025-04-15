import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./image/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Menyusun ke kiri
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: 100,
    paddingLeft: 20, // Menambahkan padding kiri
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    height: 100,
  },
  blackBox: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
    marginRight: 10, // Memberi jarak antar box
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
    marginRight: 10, // Memberi jarak antar box
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400, // Sesuaikan ukuran logo
    height: 300, // Sesuaikan ukuran logo
    resizeMode: 'contain',
  },
});

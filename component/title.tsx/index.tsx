import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
});

import {View, StyleSheet} from 'react-native';
import UserList from './component/components/UserList';

const Exercise7 = () => {
  return (
    <View style={styles.container}>
      <UserList />
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

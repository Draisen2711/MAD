import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Image style={styles.profileImage} source={require('./image/sen1.jpg')} />

      <View style={styles.infoContainerCompact}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Draisen Rey</Text>
      </View>
      <View style={styles.infoContainerCompact}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>Mahasiswa</Text>
      </View>
      <View style={styles.infoContainerCompact}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Tondano</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>GALERY</Text>
        </View>

        {/* Gambar sejajar ke samping */}
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={require('./image/sen2.jpg')} />
          <Image style={styles.image} source={require('./image/sen3.jpg')} />
        </View>

        <View style={styles.rowContainer}>
          <Image style={styles.image} source={require('./image/sen4.jpg')} />
          <Image style={styles.image} source={require('./image/sen5.jpg')} />
        </View>

        <View style={styles.rowContainer}>
          <Image style={styles.image} source={require('./image/sen6.jpg')} />
          <Image style={styles.image} source={require('./image/sen7.jpg')} />
        </View>
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Kontak</Text>
        <View style={styles.contactItem}>
          <Text>📧 draisenrey27@gmail.com</Text>
          <Text>📱 0808080808</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#004d40',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#00796b',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row', // Membuat gambar dalam satu baris
    justifyContent: 'space-between', // Memberi jarak antara gambar
    width: '100%',
    paddingHorizontal: 20, // Menambahkan padding agar lebih rapi
    marginBottom: 10,
  },
  image: {
    width: '48%', // Mengisi setengah dari layar supaya sejajar
    aspectRatio: 1, // Agar tetap kotak
    borderWidth: 1,
    borderColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
  },
  infoContainerCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 3,
    borderRadius: 15,
    width: '60%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b',
    marginRight: 10,
  },
  value: {
    fontSize: 20,
    color: '#004d40',
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#004d40',
    paddingBottom: 5,
    marginBottom: 15,
  },
  contactItem: {
    gap: 8,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* inicio */}
      <View style={styles.topbar}>
        <Text style={styles.topbarTitle}>Perfil Ninja</Text>
      </View>

      {/* conteudo */}
      <View style={styles.content}>

        <View style={styles.profileSection}>
          <Image
            source={require('./assets/naruto.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Naruto Uzumaki</Text>
          <Text style={styles.bio}>o naruto pode ser um pouco duro as vezes</Text>
        </View>

        {/* estatisticas */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>Missões</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>0 tururu</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Time</Text>
          </View>
        </View>

        {/* seguir */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Seguir Ninja</Text>
        </TouchableOpacity>

      </View>

      {/* navbar */}
      <View style={styles.bottombar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7e6',
  },

  /* inicio */
  topbar: {
    height: 60,
    backgroundColor: '#e77021',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topbarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* conteudo */
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#e77021',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e77021',
  },

  bio: {
    fontSize: 14,
    color: '#555',
  },

  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    marginVertical: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  statItem: {
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e77021',
  },

  statLabel: {
    fontSize: 13,
    color: '#666',
  },

  button: {
    backgroundColor: '#e77021',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* navbar */
  bottombar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#000',
  },

  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
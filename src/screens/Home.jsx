import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { CategorySelect } from '../components/CategorySelect';

export function Home({ onLogout, onAdd, onSelectMatch }) {
  const [openModal, setOpenModal] = useState(false);
  const [categoria, setCategoria] = useState('');

  function handleLogout() {
    setOpenModal(false);
    if (onLogout) {
      onLogout();
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setOpenModal(true)}>
              <Image source={require('../assets/foto.png')} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.profile}>
              <Text style={styles.name}>
                Olá, <Text style={{ fontWeight: 'bold' }}>Samantha</Text>
              </Text>
              <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <CategorySelect 
          categorySelected={categoria} 
          setCategory={setCategoria} 
          style={styles.categories} 
        />

        <View style={styles.section}>
          <Text style={styles.title}>Partidas agendadas</Text>
          <Text style={styles.subtitle}>Total 6</Text>
        </View>

        <TouchableOpacity style={styles.match} activeOpacity={0.7} onPress={onSelectMatch}>
          <Image source={require('../assets/lol.png')} style={styles.cover} />
          <View style={styles.info}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>Lendários</Text>
              <Text style={styles.subtitle}>Ranqueada</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>📅 18/06 às 21:00h</Text>
              <Text style={styles.host}>👤 Anfitrião</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.match} activeOpacity={0.7} onPress={onSelectMatch}>
          <Image source={require('../assets/rdd.png')} style={styles.cover} />
          <View style={styles.info}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>Yeah, boy</Text>
              <Text style={styles.subtitle}>Diversão</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>📅 23/06 às 19:00h</Text>
              <Text style={styles.guest}>👤 Visitante</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.match} activeOpacity={0.7} onPress={onSelectMatch}>
          <Image source={require('../assets/csgo.png')} style={styles.cover} />
          <View style={styles.info}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>Rumo ao topo</Text>
              <Text style={styles.subtitle}>1x1</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>📅 20/06 às 09:00h</Text>
              <Text style={styles.host}>👤 Anfitrião</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.match} activeOpacity={0.7} onPress={onSelectMatch}>
          <Image source={require('../assets/apex.png')} style={styles.cover} />
          <View style={styles.info}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>Bora queimar tudo</Text>
              <Text style={styles.subtitle}>Ranqueada</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>📅 20/06 às 14:20h</Text>
              <Text style={styles.host}>👤 Anfitrião</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.match} activeOpacity={0.7} onPress={onSelectMatch}>
          <Image source={require('../assets/valorosos.png')} style={styles.cover} />
          <View style={styles.info}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>Valorosos</Text>
              <Text style={styles.subtitle}>Diversão</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.subtitle}>📅 10/06 às 21:00h</Text>
              <Text style={styles.host}>👤 Anfitrião</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        <View style={styles.footerSpace} />
      </ScrollView>

      <Modal 
        visible={openModal} 
        transparent 
        animationType="fade" 
        statusBarTranslucent
        onRequestClose={() => setOpenModal(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>
              Deseja sair do Game<Text style={{color: '#E51C44'}}>Play</Text>?
            </Text>

            <View style={styles.rowBetween}>
              <TouchableOpacity 
                style={styles.buttonNo} 
                activeOpacity={0.7}
                onPress={() => setOpenModal(false)}
              >
                <Text style={styles.title}>Não</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.buttonYes} 
                activeOpacity={0.7}
                onPress={handleLogout}
              >
                <Text style={styles.title}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    marginLeft: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  name: {
    color: '#DDE3F0',
    fontSize: 24,
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  categories: {
    paddingLeft: 24,
    marginBottom: 30,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#7A84AA',
    fontSize: 13,
  },
  match: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  cover: {
    width: 64,
    height: 68,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  host: {
    color: '#E51C44',
    fontSize: 13,
  },
  guest: {
    color: '#32BD50',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#1D2766',
    width: '75%',
    alignSelf: 'flex-end',
    marginRight: 24,
    marginVertical: 4,
  },
  footerSpace: {
    height: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#0E1647',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
    borderRadius: 20,
  },
  modalTitle: {
    color: '#DDE3F0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonNo: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonYes: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#E51C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

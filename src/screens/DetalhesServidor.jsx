import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ButtonIcon } from '../components/ButtonIcon';

export function DetalhesServidor({ onBack }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Image 
            source={require('../assets/share.png')} 
            style={styles.shareIcon} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        <Image 
          source={require('../assets/lendarios.png')} 
          style={styles.bannerImage} 
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Lendários</Text>
          <Text style={styles.bannerSubtitle}>
            É hoje que vamos chegar ao challenger sem {'\n'}perder uma partida da md10
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Jogadores</Text>
        <Text style={styles.subtitle}>Total 3</Text>
      </View>

      <View style={styles.player}>
        <Image source={require('../assets/Tiago.png')} style={styles.avatar} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Tiago Luchtenberg</Text>
          <View style={styles.statusRow}>
            <View style={styles.dotAvailable} />
            <Text style={styles.subtitle}>Disponível</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.player}>
        <Image source={require('../assets/Rodrigo.png')} style={styles.avatar} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Rodrigo Gonçalves</Text>
          <View style={styles.statusRow}>
            <View style={styles.dotBusy} />
            <Text style={styles.subtitle}>Ocupado</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.player}>
        <Image source={require('../assets/Diego.png')} style={styles.avatar} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>Diego Fernandes</Text>
          <View style={styles.statusRow}>
            <View style={styles.dotBusy} />
            <Text style={styles.subtitle}>Ocupado</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />

      <ButtonIcon title="Entrar na partida" style={styles.button} />

      <View style={styles.footerSpace} />
    </ScrollView>
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
    marginBottom: 20,
  },
  backButton: {
    color: '#DDE3F0',
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#DDE3F0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
  bannerContainer: {
    height: 234,
    marginBottom: 24,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
  },
  bannerTitle: {
    color: '#DDE3F0',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bannerSubtitle: {
    color: '#DDE3F0',
    fontSize: 13,
    lineHeight: 20,
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
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  playerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  playerName: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotAvailable: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#32BD50',
    marginRight: 8,
  },
  dotBusy: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E51C44',
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#1D2766',
    width: '75%',
    alignSelf: 'flex-end',
    marginRight: 24,
    marginVertical: 4,
  },
  button: {
    marginHorizontal: 24,
    marginTop: 28,
  },
  footerSpace: {
    height: 40,
  },
});

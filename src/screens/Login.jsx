import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonIcon } from '../components/ButtonIcon';

export function Login({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/fundo.png')} 
          style={styles.fundo} 
        />
        <Image 
          source={require('../assets/man.png')} 
          style={styles.man} 
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} e organize suas {'\n'} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
        </Text>
        <ButtonIcon 
          title="Entrar com Discord" 
          onPress={onPress} 
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 320,
    alignItems: 'center',
  },
  fundo: {
    width: '100%',
    height: 350,
  },
  man: {
    width: '70%',
    height: 300,
    position: 'absolute',
    transform: [{ scaleX: -1 }],
    marginTop: 30, 
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#DDE3F0',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: '#DDE3F0',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 35,
    lineHeight: 25,
  },
  button: {
    width: '70%',
  },
});
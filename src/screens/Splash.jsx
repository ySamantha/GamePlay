import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function Splash({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
      <Image 
        source={require('../assets/play.png')} 
        style={styles.play} 
      />
      <Text style={styles.title}>
        Game<Text style={{color: '#E51C44'}}>Play</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {
    width: 90,
    height: 120,
    position: 'absolute',
  },
  title: {
    fontSize: 45,
    color: '#DDE3F0',
    fontWeight: 'bold',
  },
});
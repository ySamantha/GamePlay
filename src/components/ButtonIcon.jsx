import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function ButtonIcon({ title, onPress, style }) {
  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      activeOpacity={0.7} 
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Image 
          source={require('../assets/discord.png')} 
          style={styles.icon} 
          resizeMode="contain" 
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#991F36',
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: '#DDE3F0',
    fontSize: 15,
    textAlign: 'center',
  },
});

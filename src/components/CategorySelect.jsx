import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const categories = [
  { id: '1', title: 'Ranqueada', icon: require('../assets/podio.png') },
  { id: '2', title: 'Duelo 1x1', icon: require('../assets/espadas.png') },
  { id: '3', title: 'Diversão', icon: require('../assets/boneco.png') },
];

export function CategorySelect({ 
  categorySelected, 
  setCategory, 
  hasCheckBox = false, 
  style 
}) {
  return (
    <View style={[styles.container, style]}>
      {categories.map(category => {
        const isChecked = category.id === categorySelected;

        return (
          <TouchableOpacity 
            key={category.id}
            style={[styles.card, isChecked && styles.cardSelected]} 
            activeOpacity={0.7}
            onPress={() => setCategory && setCategory(isChecked ? '' : category.id)}
          >
            {hasCheckBox && (
              <View style={[styles.check, isChecked && styles.checkSelected]} />
            )}
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  card: {
    width: 104,
    height: 120,
    backgroundColor: '#171F52',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    opacity: 0.5,
  },
  cardSelected: {
    opacity: 1,
    borderColor: '#E51C44',
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#1D2766',
  },
  checkSelected: {
    backgroundColor: '#E51C44',
    borderColor: '#E51C44',
  },
  icon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  title: {
    color: '#DDE3F0',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
});

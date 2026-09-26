import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput,KeyboardAvoidingView } from 'react-native';
import { CategorySelect } from '../components/CategorySelect';

export function Agendar({ onBack }) {
  const [categoria, setCategoria] = useState('0');

  const [servidorSelecionado, setServidorSelecionado] = useState(false);

  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [hora, setHora] = useState('');
  const [minuto, setMinuto] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={'padding'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendar partida</Text>
        <View/>
      </View>

      <Text style={styles.label}>Categoria</Text>
      <CategorySelect 
        categorySelected={categoria} 
        setCategory={setCategoria} 
        hasCheckBox 
      />

      <TouchableOpacity 
        style={styles.serverCard} 
        activeOpacity={0.7}
        onPress={() => setServidorSelecionado(!servidorSelecionado)}
      >
        {servidorSelecionado ? (
          <>
            <Image source={require('../assets/valorosos.png')} style={styles.serverImage} />
            <View style={styles.serverInfo}>
              <Text style={styles.serverTitle}>Valorosos</Text>
            </View>
          </>
        ) : (
          <>
            <View/>
            <Text style={styles.serverPlaceholderText}>Selecione um servidor</Text>
          </>
        )}
        <Text style={styles.backButton}>›</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.dateBlock}>
          <Text style={styles.label}>Dia e mês</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={2}
              value={dia}
              onChangeText={setDia}
            />
            <Text style={styles.symbol}>/</Text>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={2}
              value={mes}
              onChangeText={setMes}
            />
          </View>
        </View>

        <View style={styles.dateBlock}>
          <Text style={styles.label}>Horário</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={2}
              value={hora}
              onChangeText={setHora}
            />
            <Text style={styles.symbol}>:</Text>
            <TextInput
              style={styles.inputSmall}
              keyboardType="numeric"
              maxLength={2}
              value={minuto}
              onChangeText={setMinuto}
            />
          </View>
        </View>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.limit}>Max 100 caracteres</Text>
      </View>

      <TextInput
        style={styles.inputLarge}
        multiline
        maxLength={100}
        numberOfLines={4}
        textAlignVertical="top"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onBack}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>

      <View style={styles.footerSpace} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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
  label: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  serverCard: {
    height: 68,
    backgroundColor: '#171F52',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  serverImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  serverInfo: {
    flex: 1,
    marginLeft: 16,
  },
  serverTitle: {
    color: '#DDE3F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  serverPlaceholderText: {
    flex: 1,
    color: '#DDE3F0',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBlock: {
    width: '45%',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSmall: {
    flex: 1,
    height: 48,
    backgroundColor: '#171F52',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    color: '#DDE3F0',
    fontSize: 16,
    textAlign: 'center',
  },
  symbol: {
    color: '#7A84AA',
    fontSize: 18,
    marginHorizontal: 8,
  },
  limit: {
    color: '#7A84AA',
    fontSize: 13,
    marginBottom: 12,
  },
  inputLarge: {
    height: 95,
    backgroundColor: '#171F52',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    color: '#DDE3F0',
    fontSize: 14,
    padding: 16,
    marginBottom: 28,
  },
  button: {
    height: 56,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSpace: {
    height: 40,
  },
});


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

export default function App() {

  const [cpf, setCpf] = useState('');
  const [inputMask, setInputMask] = useState('cpf')
  return (
    <View style={styles.container}>
      <TextInputMask
        style={styles.input}
        placeholder="CPF/CNPJ"
        type={inputMask}
        onChangeText={(text) => {
              setInputMask(text?.length >= 14 ? 'cnpj' : 'cpf')
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#f00',
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
  }
});

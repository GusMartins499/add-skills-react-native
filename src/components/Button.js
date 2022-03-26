import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8257e5',
    padding: Platform.OS === 'ios' ? 16 : 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c4c4cc',
  },
});

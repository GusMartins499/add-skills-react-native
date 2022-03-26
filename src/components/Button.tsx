import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

interface TypeButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function Button({ title = 'New', ...rest }: TypeButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
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

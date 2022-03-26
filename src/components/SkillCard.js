import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'ios' ? 16 : 18,
    borderRadius: 8,
    marginTop: 16,
  },
  textSkill: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c4c4cc',
  },
});

import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

interface ISkillProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: ISkillProps) {
  return (
    <TouchableOpacity
    style={styles.buttonSkill}
    {...rest}>
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

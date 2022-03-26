import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);
  const [gretting, setGretting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
  }, [mySkills]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    if (newSkill.trim() === '') {
      Alert.alert('Invalid skill');
      return;
    }
    const checkDuplicateSkill = mySkills.find(skill => skill.name === newSkill);

    if (checkDuplicateSkill) {
      Alert.alert('skill already added');
      return;
    }
    setMySkills([...mySkills, data]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Gustavo</Text>
      <Text style={styles.gretting}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c4c4cc',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#c4c4cc',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 16 : 18,
    marginTop: 32,
    borderRadius: 8,
  },
  gretting: {
    color: '#c4c4cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

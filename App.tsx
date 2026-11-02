import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('')
  const ageAsNumber = Number(age)
  const isValidAge = age.trim() !== '' && !isNaN(ageAsNumber)
  
  const lowerLimit: number = isValidAge ? (220 - ageAsNumber) * 0.65 : 0
  const upperLimit: number = isValidAge ? (220 - ageAsNumber) * 0.85 : 0

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Text style={styles.title}>Heart Rate Calculator</Text>
        <Text style={styles.subtitle}>
          Calculate your target heart rate during exercise.
        </Text>

        <Text style={styles.inputLabel}>YOUR AGE</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor="#A0A0A0"
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.resultHeading}>YOUR HEART RATE LIMITS:</Text>

        <View style={styles.resultsContainer}>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>LOWER LIMIT</Text>
            <Text style={styles.resultValue}>
              {lowerLimit.toFixed(0)}
            </Text>
            <Text style={styles.unit}>BPM</Text>
          </View>

          <View style={[styles.resultBox, styles.upperResult]}>
            <Text style={styles.resultLabel}>UPPER LIMIT</Text>
            <Text style={styles.resultValue}>
              {upperLimit.toFixed(0)}
            </Text>
            <Text style={styles.unit}>BPM</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#263247',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#7A8495',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#687386',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F3F5F9',
    borderRadius: 12,
    padding: 15,
    fontSize: 17,
    color: '#263247',
    textAlign: 'center',
    marginBottom: 30,
  },
  resultHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#687386',
    marginBottom: 12,
  },
  resultsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  resultBox: {
    flex: 1,
    backgroundColor: '#FFF0ED',
    borderRadius: 14,
    paddingVertical: 20,
    alignItems: 'center',
  },
  upperResult: {
    backgroundColor: '#FCE5E5',
  },
  resultLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A65D57',
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D94F48',
  },
  unit: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A65D57',
    marginTop: 4,
  },
  footer: {
    fontSize: 11,
    color: '#929AAA',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 17,
  },
});
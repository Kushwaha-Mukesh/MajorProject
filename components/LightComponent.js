import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LightComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Light</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDFEA',
    borderRadius: 10,
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#9DB2BF',
    padding: 10,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#9DB2BF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LightComponent;

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createThingsSchema } from '../src/graphql/mutations';

const Light = (props) => {
  const [buttonState, setButtonState] = useState("OFF");

  const handleToggle = async() => {
    buttonState === 'OFF' ? setButtonState('ON') : setButtonState('OFF');

    const user = await Auth.currentAuthenticatedUser();
    const Things_id = user.username;
    const Things = props.Things;
    const Status = buttonState === 'OFF' ? '0' : '1';

    await createThingInDatabase(Things_id, Things, Status);
  };

  const createThingInDatabase = async (Things_id, Things, Status) => {
    try {
      const newThing = {
        Things_id,
        Things,
        Status,
      };

      await API.graphql(graphqlOperation(createThingsSchema, { input: newThing }));
    } catch (error) {
      console.error('Error creating thing:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>{buttonState === 'ON' ? props.title+' ON' : props.title+' OFF'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2980b9',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Light;
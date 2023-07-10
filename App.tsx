import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Light from './components/Light';
import Fan from './components/Fan';
import GasGauge from './components/GasGauge';

import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react-native';
Amplify.configure(awsconfig);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const App = () => {

  const [username, setUser] = useState('');

  const checkAuthStatus = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userEmail = currentUser.attributes.email;
      const separator = userEmail.indexOf('.');
      const user = userEmail.substring(0,separator);
      setUser(user);
    } catch (error) {
      console.log('User is not authenticated:', error);
    }
  };

  useEffect(()=>{
    checkAuthStatus();
  }, [])

  return(
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.nav}>
      <Text style={styles.msg}>Welcome, {username}</Text>
      <SignOutButton />
      </View>
      <View style={styles.buttonContainer}>
      <Light />
      </View>
      <Fan />
      <GasGauge />
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  msg: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: '#03001C',
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  }
});

export default withAuthenticator(App);

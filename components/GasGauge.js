import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath
} from 'react-native-cool-speedometer';
import { API, graphqlOperation } from 'aws-amplify';
import { getThingsSchema } from '../src/graphql/queries';
// import { listThingsSchemas } from '../src/graphql/queries';

const GasGauge = () => {
  const [value, setValue] = useState(0);

  // const fetchGasData = async()=> {
  //   try {
  //     const GasData = await API.graphql(graphqlOperation(getThingsSchema, { id: '1689007772457' }));
  //     console.log(GasData);
  //   } catch (error) {
  //     console.log("Error while fetching Gas Data", error);
  //   }
  // }

  // useEffect(()=>{
  //   fetchGasData();
  // },[])

  return (
    <SafeAreaView>
      <View>
        <Speedometer
           value={value}
           max={100}
           angle={180}
           fontFamily='squada-one'
        >
        <Background />
        <Arc/>
        <Needle/>
        <DangerPath />
        <Progress/>
        <Marks/>
        <Indicator />
        </Speedometer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
      marginTop: 40,
      borderWidth: 1,
      fontSize: 16,
      marginTop: 20
  }
})

export default GasGauge;
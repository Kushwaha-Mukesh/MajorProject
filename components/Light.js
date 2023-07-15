import React, { useState, useEffect } from 'react';
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
        <Text style={styles.buttonText}>{buttonState === 'ON' ? 'LIGHT ON' : 'LIGHT OFF'}</Text>
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




// -------------------secondary code-------------------------------------


// import React, { useState, useEffect } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { API, graphqlOperation, Auth } from 'aws-amplify';
// import { createThingsSchema } from '../src/graphql/mutations';
// import { getManualStatusTable } from "../src/graphql/queries";
// import { onCreateManualStatusTable } from "../src/graphql/subscriptions";

// const Light = () => {
//   const [buttonState, setButtonState] = useState("OFF");
//   const [remoteStatus, setRemoteStatus] = useState("OFF");
//   const [manualStatus, setManualStatus] = useState("OFF");

//   const handleToggle = async () => {
//     buttonState === 'OFF' ? setButtonState('ON') : setButtonState('OFF');

//     const user = await Auth.currentAuthenticatedUser();
//     const Things_id = user.username;
//     const Things = 'RelayPin1';
//     const Status = buttonState === 'OFF' ? '0' : '1';

//     await createThingInDatabase(Things_id, Things, Status);
//   };

//   const createThingInDatabase = async (Things_id, Things, Status) => {
//     try {
//       const newThing = {
//         Things_id,
//         Things,
//         Status,
//       };

//       await API.graphql(graphqlOperation(createThingsSchema, { input: newThing }));
//     } catch (error) {
//       console.error('Error creating thing:', error);
//     }
//   };

//   const fetchManualSwitchStatus = async () => {
//     try {
//       const response = await API.graphql(graphqlOperation(getManualStatusTable, { id: 'ID' }));
//       console.log("response while fetching data", response);
//       // const manualStatus = response.data.getManualStatusTable.Status;
//       return response;
//     } catch (error) {
//       console.log("Error while fetching manual switch status", error);
//     }
//   };

//   useEffect(() => {
//     const fetchManualStatusAndSubscribe = async () => {
//       const manualStatus = await fetchManualSwitchStatus();
//       // setManualStatus(manualStatus);

//       const subscription = API.graphql(graphqlOperation(onCreateManualStatusTable, { id: "ID", Status: ""})).subscribe({
//         next: (result) => {
//           // const newManualStatus = result.value.data.onCreateManualStatusTable.Status;
//           // setManualStatus(newManualStatus);
//           console.log("response while update table", result);
//         },
//         error: (error) => {
//           console.log("Error subscribing to manual switch updates:", error);
//         }
//       });

//       return () => {
//         subscription.unsubscribe();
//       };
//     };

//     fetchManualStatusAndSubscribe();
//   }, []);

//   // useEffect(() => {
//   //   setRemoteStatus(manualStatus);
//   // }, [manualStatus]);

//   return (
//     <View>
//       <TouchableOpacity style={styles.button} onPress={handleToggle}>
//         <Text style={styles.buttonText}>{buttonState === 'ON' ? 'LIGHT ON' : 'LIGHT OFF'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#2980b9',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Light;

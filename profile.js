import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter, Stack, Link } from 'expo-router'

import db from '../firebase/config';
import { collection, addDoc, getDocs } from "firebase/firestore";

function profile() {
  const router = useRouter();

  async function addData(value2) {
    try {
      const docRef = await addDoc(collection(db, "mydoc2"), {
        test2: value2,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [responses, setResponses] = React.useState([]);

  async function fetchResponses() {
    var newResponses = []
    const querySnapshot = await getDocs(collection(db, "mydoc2"));
    querySnapshot.forEach((doc) => {
      newResponses.push({ id: doc.id, ...doc.data() });
    });
    console.log(newResponses);
    setResponses(newResponses);
  }

  React.useEffect(() => {
    // Fetch questions from firebase
    fetchResponses()
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: '#FFE030'
      }} />

      <Text style={{ fontSize: 30 }}>Hello Profile</Text>
      <Link href="/">Go Back</Link>
      {/* <Button onPress={() => router.back()}title="Go Back" /> */}

      <Button title="Press me" onPress={() => {
        addData('value2')
        fetchResponses()
      }}>press me</Button>

      {responses.map((response) => {
        return (
          <View style={{ width: 200 }} key={response.id}>
            <View>
              <Text style={styles.cardText} key={response.test2}>{response.test2}</Text>
            </View>
          </View>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    flexShrink: 1
  },
})

export default profile
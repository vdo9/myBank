import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { useRouter, Stack, Link } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';


import db from '../firebase/config';
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";


function profile() {
  const router = useRouter();
  const navigation = useNavigation();

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

  async function updateAddress(newAddress) {
    try {

      console.log(newAddress);
      const ticketRef = doc(db, "users", "SgYABPz2M7JEyRN4AJlN");

      await updateDoc(ticketRef, { 'address': title });
      console.log('Document updated successfully!');

    } catch (error) {
      console.error('Error updating document:', error);
    };
  }

  const [responses, setResponses] = React.useState([]);
  const [title, setTitle] = React.useState("");

  async function fetchResponses() {
    var newResponses = []

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      newResponses.push({ id: doc.id, ...doc.data() });
    });
    //console.log(newResponses);
    setResponses(newResponses);
  }

  React.useEffect(() => {
    // Fetch questions from firebase
    fetchResponses()
  }, []);

  // update address state in DOM 
  React.useEffect(() => {
    fetchResponses();
  }, [responses]);


  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={false}
        style={{ width: '100%', height: 800 }}
      >
        {/* <Stack.Screen options={{title: 'Home'}} /> */}
        {/* header greeting */}
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.greeting}>
            <Text style={{
              paddingBottom: 5,
              fontSize: 20,
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              color: 'gray'
            }}>Good morning </Text>
            <Text style={{
              paddingBottom: 5,
              fontSize: 22,
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
            }}>Bill Song</Text>
            <Text style={{
              paddingBottom: 5,
              fontSize: 15,
              fontFamily: 'Helvetica',
            }}>April 23, 2023</Text>
          </View>
        </View>

        {/* interact */}
        <View style={{marginTop: 5}}>
          <Pressable onPress={() => navigation.navigate('interact')}>
            <View style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: '#D9D9D9'}}> 
              <View style={{marginLeft: 15, marginTop: 12, marginBottom: 8}}>
                <Feather style={{marginLeft:5, marginBottom: 1}} name="headphones" size={40} color="black" />
                <Text style={{fontSize: 11, fontWeight: 'bold', marginLeft: 3}}>Interact</Text>
              </View>   
            </View>
          </Pressable>
        </View>


        <View style={[styles.newImagePos, {marginTop: -80}]}>
          <Image
            style={[styles.image,{width: 200, height: 80, marginLeft: -50}]}
            source={require('../assets/MyBank.png')}
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Stack.Screen options={{
            headerStyle: { backgroundColor: "#1E2632" },
            headerTintColor: '#FFE030'
          }} />

          {/* input */}
          <View style={{
            width: 340,
            height: 60,
            backgroundColor: '#F9F7F7',
            borderRadius: 20,
            borderWidth: 4,
            borderColor: 'black',
            marginBottom: 20,
          }}>
            <View style={{ padding: 12 }}>
              <Text style={{ marginLeft: 15, marginBottom: 0, fontWeight: 'bold', fontSize: 16, marginTop: 10 }}></Text>
              <TextInput style={{ marginLeft: 0, marginBottom: 0, fontSize: 16, marginTop: -17 }}
                onChangeText={setTitle}
                value={title}
                placeholder='Click Here to Edit Address!'
                placeholderTextColor='black'
              />
              <MaterialCommunityIcons name="home-edit" size={24} color="black" style={{ marginLeft: 270, marginTop: -25 }} />

            </View>
          </View>

          <Button title="Submit New Address" onPress={() => {
            updateAddress(title);
            fetchResponses();

            // 1310 Home Ave Apt 10 Irvine, CA 92602
          }}>Submit New Address</Button>

          {responses.map((response) => {
            return (
              <View style={{ width: 200 }} key={response.id}>
                <View>
                  <Text style={{ fontSize: 20, fontFamily: 'Helvetica' }}>Current Address:</Text>
                  <Text style={styles.addressText} key={response.test2}>{response.address}</Text>
                  <Text style={{ fontSize: 20, paddingTop: 10, fontFamily: 'Helvetica' }}>Date of Birth:</Text>
                  <Text style={{ fontSize: 20, paddingTop: 2, fontFamily: 'Helvetica', fontWeight: 'bold' }}>05/04/2000</Text>
                  <Text style={{ fontSize: 20, paddingTop: 10, fontFamily: 'Helvetica' }}>Phone Number:</Text>
                  <Text style={{ fontSize: 20, paddingTop: 2, fontFamily: 'Helvetica', fontWeight: 'bold' }}>213-587-9191</Text>
                  <Text style={{ fontSize: 20, paddingTop: 10, fontFamily: 'Helvetica' }}>Email:</Text>
                  <Text style={{ fontSize: 20, paddingTop: 2, fontFamily: 'Helvetica', fontWeight: 'bold' }}>myhome@ucla.edu</Text>
                </View>
              </View>
            );
          })}

        </View>
      </ScrollView>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  greeting: {
    marginRight: 105,
  },
  alert: {
    flexDirection: 'row', // Set direction to row
    alignItems: 'center', // Align items along the vertical axis
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: '#E12C2C',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
  },
  line: {
    height: 1,
    width: 300,
    backgroundColor: '#DDD9D9',
    marginVertical: 20, // add margin top and bottom
  },
  shadowBox: {
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    backgroundColor: 'white',
  },
  checkingcard: {
    flexDirection: 'column', // Set direction to row
    alignItems: 'center', // Align items along the vertical axis
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: '#FFB703',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
    height: 210,
    width: 330,

  },
  checking: {
    marginRight: 210,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#4F4C4C'
  },
  credit: {
    marginRight: 250,
    marginTop: 20,
    paddingBottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#4F4C4C'
  },
  creditcard: {
    flexDirection: 'column', // Set direction to row
    alignItems: 'center', // Align items along the vertical axis
    justifyContent: 'space-between', // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: '#33658A',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
    height: 180,
    width: 330,
  },
  image: {
    width: 100,
    height: 50,
  },
  imagePos: {
    paddingLeft: 180,
    paddingTop: 10
  },
  newImagePos: {
    paddingLeft: 180,
    paddingTop: 5,
    height: 100,
    width: 100
  },
  number: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 2,
  },
  numberPos: {
    marginRight: 20,
    marginBottom: 25,
  },

  containerFlip: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontcard: {
    position: "absolute",
    backfaceVisibility: 'hidden'
  },
  backCard: {
    backfaceVisibility: "hidden"
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: "#8ecae6",
    marginTop: 10,
    borderRadius: 5,
  },
  addressText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingTop: 0
  },
});


export default profile


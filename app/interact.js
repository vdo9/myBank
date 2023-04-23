import { View, Text, StyleSheet, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
// import Tts from 'react-native-tts';
import * as Speech from 'expo-speech';
import openMap from 'react-native-open-maps';

const goBank = () => {
  openMap({ latitude: 33.677010, longitude: -117.831590 });
}


// handle sound translation
const handleAtm = () => {
  // Speech.speak("ATM はどこですか?", {language: "ja-JP"});
  Speech.speak("自动取款机在哪里", {language: "zh"});
}

// greeting
const GreetingComponent = () => {
  return (
    <View style={{padding: 15, paddingVertical: 22}}>
      <Text style={{fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold', marginVertical: 1}}>Good morning,</Text>
      <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1}}>Yoojin Song</Text>
      <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1}}>How can I help?</Text>
    </View>
  )
}

//atm
const AtmComponent = () => {
  return (
    <View style={{padding: 15, paddingVertical: 22}}>
      <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1}}>The nearest ATM is 1.5 miles away.</Text>
      <TouchableOpacity style={{
        borderRadius: 25, // adjust as needed
        backgroundColor: '#443cf4',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',}}
        onPress={() => goBank()}>
        <Text style={{color: 'white', fontFamily: 'Helvetica', fontWeight: 'bold'}}>Open Maps</Text>
      </TouchableOpacity>
    </View>
  )
}


const interact = () => {
  // states
  const [atmVisible, setAtmVisible] = useState(false);
  const [greetingVisible, setGreetingVisible] = useState(true);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{
        color:'#797575',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 18
      }}>April 23, 2023</Text>

      {/* support and greeting row */}
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imagePos}>
              <Image
                style={styles.image}
                source={require('../assets/support.png')}
              />
              <Text style={{
                  color:'#797575',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  fontSize: 16,
              }}>Support</Text>
        </View>
        {/* chat bubble */}
        <View style={{
          width: 200, 
          height: 200, 
          backgroundColor: '#F9F7F7', 
          borderRadius: 20,
          borderWidth: 4, 
          borderColor: 'black'}}>

          {/* when atm button is clicked, component switches out */}
          {atmVisible ? <AtmComponent /> : <GreetingComponent />}

        </View>
      </View>

        {/* FAQS */}
        <Text style={{
        color:'#797575',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
      }}>Choose an option in regards to your account:</Text>

      <Pressable onPress={() => setAtmVisible(!atmVisible)}>
      <View style={styles.box}>
          <View style={{paddingTop: 28, paddingLeft: 28}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>Where is the nearest ATM?</Text>
            <Pressable style={{marginLeft: 272}}onPress={() => handleAtm()}>
              <AntDesign name="sound" size={24} color="gray" />            
            </Pressable>
          </View>
      </View>
      </Pressable>

        <View style={styles.box}>
          <View style={{paddingTop: 18, paddingLeft: 18, flexDirection:'row'}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>What is my routing and account number?</Text>
            <Pressable style={{marginLeft: -25, marginTop: 35, }}>
              <AntDesign name="sound" size={24} color="gray" />            
            </Pressable>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{paddingTop: 18, paddingLeft: 18, flexDirection:'row'}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>Can I get a copy of my statements?</Text>
            <Pressable style={{marginLeft: 65, marginTop: 35, }}>
              <AntDesign name="sound" size={24} color="gray" />            
            </Pressable>
          </View>
        </View>

        {/* input box */}
        <View style={{
          width: 340, 
          height: 60, 
          backgroundColor: '#F9F7F7', 
          borderRadius: 20,
          borderWidth: 4, 
          borderColor: 'black',
          marginBottom: 20,}}>
          <View style={{padding: 12}}>
            <Text style={{fontSize: 18, fontFamily: 'Helvetica', marginVertical: 1, color: 'gray', marginLeft: 90}}>Type or Speak</Text>
            <MaterialCommunityIcons name="microphone-outline" size={32} color="black" style={{marginLeft: 270, marginTop: -25}} />
          </View>
        </View>

    </View>
    </ScrollView>
  )
}

export default interact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
        },
    imagePos: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    box: {
      // backgroundColor: '#fff',
      elevation: 5, // Add elevation to create the drop shadow
      shadowColor: '#000', // Set the color of the shadow
      shadowOffset: { width: 0, height: 2 }, // Set the offset of the shadow
      shadowOpacity: 0.5, // Set the opacity of the shadow
      shadowRadius: 2, // Set the radius of the shadow

      width: 340, 
      height: 90, 
      backgroundColor: '#F9F7F7', 
      borderRadius: 20,
      borderWidth: 1, 
      borderColor: 'black',
      marginBottom: 20,
    },
})
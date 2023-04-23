import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const interact = () => {
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
        <View style={{
          width: 200, 
          height: 200, 
          backgroundColor: '#F9F7F7', 
          borderRadius: 20,
          borderWidth: 4, 
          borderColor: 'black'}}>
          <View style={{padding: 15, paddingVertical: 22}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold', marginVertical: 1}}>Good morning,</Text>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1}}>Yoojin Song</Text>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1}}>How can I help?</Text>
          </View>
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

      <View style={styles.box}>
          <View style={{padding: 28}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>Where is the nearest ATM?</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{padding: 18}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>What is my routing and account number?</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{padding: 18}}>
            <Text style={{fontSize: 20, fontFamily: 'Helvetica', marginVertical: 1, fontWeight: 'bold'}}>Can I get a copy of my statements?</Text>
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
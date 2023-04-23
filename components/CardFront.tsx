import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import {SharedValue} from 'react-native-reanimated'
interface IProps{
  rotate: SharedValue<number>
}

const CardFront = ({rotate}:IProps)=>{
  return (
    <Pressable onPress={()=>{
        rotate.value = rotate.value ? 0 : 1;
      }}>
    <View>
        <View style={styles.checkingcard}>
          <View style={styles.imagePos}>
            <Image
              style={styles.image}
              source={require('../assets/MyBank.png')}
            />
          </View>
          <View style={styles.numberPos}>
            <Text style={styles.number}>
              **** **** **** 3178
            </Text>
          </View>
          </View>
    </View>
    </Pressable>
  )
}

export default CardFront

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: 'white'
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
      marginRight: 180,
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
      marginTop: 25,
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
        backgroundColor: '#023047',
        width: 300,
        height: 200,
        borderRadius: 10,
        padding: 20
      },
  });
  
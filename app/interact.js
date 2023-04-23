import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const interact = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color:'#797575',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 18
      }}>April 23, 2023</Text>
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

        <View>

        </View>
    </View>
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
        marginRight: 220
    }
})
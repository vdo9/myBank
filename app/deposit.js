import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useRouter, Stack, Link } from 'expo-router'
// import { TranslatorProvider } from 'react-native-translator' // here
// import Translator from 'react-native-translator';

import { useState } from 'react'


function deposit() {
  const router = useRouter();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={false}
        style={{ width: '100%', height: 800 }}
      >
    <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: '#FFE030'
      }} />

      <Text style={{ fontSize: 30, fontFamily: 'Helvetica', marginBottom: 20,}}>Deposit Money</Text>
      <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/camera-01.png')}
          />
      </View>

          <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: 20, marginBottom: 10, marginRight: 180, marginTop: 20}}>Pending Checks</Text>
          <View style={{ width: 350, height: 120, borderWidth: 3, borderRadius: 25, padding: 20, marginBottom: 10, flexDirection:'row'}}>
            <Image
              style={{width: 200, height: 90, borderWidth: 1, marginRight: 20, marginTop: -8, marginBottom: 100,}}
              source={require('../assets/duck11.png')}
            />
            <Text style={{marginRight: 10, fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold'}}> $50.00 </Text>
          </View>
          
      <View style={{ width: 350, height: 120, borderWidth: 3, borderRadius: 25, padding: 20, marginTop: 10, marginBottom: 20, flexDirection: 'row'}}>
          <Image
            style={{width: 200, height: 90, borderWidth: 1, marginTop: -8, marginRight: 15}}
            source={require('../assets/duck15.png')}
          />
          <Text style={{marginRight: 10, fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold'}}> $100.00 </Text>
      </View >
          
      <View>
      </View>
          <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: 20, marginBottom: 10, marginRight: 180, marginTop: 20}}>Deposited Checks</Text>
          <Image
            style={{width: 200, height: 90, borderWidth: 1, marginRight:140}}
            source={require('../assets/duck14-modified.png')}
          />
      <View>

      </View>
{/* 
      <Translator
        from="en"
        to="ko"
        value={value}
        onTranslated={(t) => setResult(t)}
      /> */}
      
      {/* <TextInput value={value} onChangeText={(t) => setValue(t)} />
      <Text>{result}</Text> */}

      {/* <Link href="/">Go Back</Link> */}

      {/* <Button onPress={() => router.back()}title="Go Back" /> */}
    </View>
    </ScrollView>
  );
}

export default deposit
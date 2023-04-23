import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRouter, Stack, Link } from 'expo-router'
import { TranslatorProvider } from 'react-native-translator' // here
import Translator from 'react-native-translator';

import { useState } from 'react'


function deposit() {
  const router = useRouter();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: "#1E2632" },
        headerTintColor: '#FFE030'
      }} />

      <Text style={{ fontSize: 30 }}>Hello Deposit</Text>

      <Translator
        from="en"
        to="ko"
        value={value}
        onTranslated={(t) => setResult(t)}
      />
      
      <TextInput value={value} onChangeText={(t) => setValue(t)} />
      <Text>{result}</Text>

      <Link href="/">Go Back</Link>

      {/* <Button onPress={() => router.back()}title="Go Back" /> */}
    </View>
  );
}

export default deposit
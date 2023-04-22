import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRouter, Stack, Link} from 'expo-router'

function profile() {
  const router = useRouter(); 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Stack.Screen options={{
          headerStyle: {backgroundColor: "#1E2632"},
          headerTintColor: '#FFE030'
        }} />

        <Text style={{fontSize:30}}>Hello Profile</Text>
        <Link href="/">Go Back</Link>
        {/* <Button onPress={() => router.back()}title="Go Back" /> */}
    </View>
  );
}

export default profile
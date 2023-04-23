import { Stack, useRouter, Tabs } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { useEffect } from 'react';
import Dropdown from '../components/dropdown';
import { AppProvider } from '../context/AppContext';


// export default Tabs;



export default function Layout() {


  const [selectedLanguage, setSelectedLanguage] = useState("e");

  
  useEffect(() => {
    console.log('selected language is ', selectedLanguage);
  }, [selectedLanguage]);
  
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen name="deposit" options={{
          tabBarLabel: () => null,
          headerTitle: "Deposit and Money Transfer",
          headerLeft: () => (
            <Ionicons style={styles.menu} name="menu-outline" size={35} color="white" />
            // <Text>{selectedLanguage}</Text>
          ),
          // headerRight: () => (
          //   <View>
          //     <Dropdown setLanguage={setSelectedLanguage} />

          //   </View>
          // ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="cash-outline" size={35} color="black" />),
        }} />



        <Tabs.Screen name="index" options={{
          tabBarLabel: () => null,
          headerTitle: " ",
          headerLeft: () => (

            <Ionicons style={styles.menu} name="menu-outline" size={35} color="black" />
          ),
          headerRight: () => (
            <View>
              <Dropdown setLanguage={setSelectedLanguage} />
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={35} color="black" />
          ),
        }} />

        <Tabs.Screen name="profile" options={{
          tabBarLabel: () => null,
          headerLeft: () => (

            <Ionicons style={styles.menu} name="menu-outline" size={35} color="white" />
          ),
          headerTitle: "Your Profile",
          // headerRight: () => (
          //   <View>
          //     <Dropdown setLanguage={setSelectedLanguage} />
          //   </View>
          // ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={35} color="black" />),
        }} />

        <Tabs.Screen name="interact" options={{
          tabBarButton: () => null,
          headerTitle: " ",
          headerLeft: () => (

            <Ionicons style={styles.menu} name="menu-outline" size={35} color="black" />
          ),
          // headerRight: () => (
          //   <View>
          //     <Dropdown setLanguage={setSelectedLanguage} />
          //   </View>
          // ),
        }} />

      </Tabs>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginLeft: 20,
  }
})
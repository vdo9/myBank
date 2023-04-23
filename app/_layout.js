import { Stack, useRouter, Tabs } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';



// export default Tabs;


export default function Layout() {
    return (
      <SafeAreaProvider>
        <Tabs>
          <Tabs.Screen name="deposit" options={{ 
            tabBarLabel: () => null,
            tabBarIcon: ({color}) => (
                <Ionicons name="cash-outline" size={35} color="black" />            ),
            }} />
          <Tabs.Screen name="index" options={{ 
            tabBarLabel: () => null, 
            headerTitle: " ",
            headerLeft: () => (
                <Ionicons style={styles.menu} name="menu-outline" size={35} color="black" />
            ), 
            tabBarIcon: ({color}) => (
                <AntDesign name="home" size={35} color="black" />
            ),
            }} />
          <Tabs.Screen name="profile" options={{ 
            tabBarLabel: ()=>null,
            tabBarIcon: ({color}) => (
                <Ionicons name="person-circle-outline" size={35} color="black" />            ),
            }} />
          <Tabs.Screen name="interact" options={{ 
            tabBarButton: () => null
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
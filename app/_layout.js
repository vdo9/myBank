import { Stack, useRouter, Tabs } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';



// export default Tabs;


export default function Layout() {
    return (
      <SafeAreaProvider>
        <Tabs>
          <Tabs.Screen name="deposit" options={{ tabBarLabel: "Deposit" }} />
          <Tabs.Screen name="index" options={{ 
            tabBarLabel: "Home", 
            headerTitle: " ",
            headerLeft: () => (
                <Ionicons style={styles.menu} name="menu-outline" size={42} color="black" />
            ), }} />
          <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
        </Tabs>
      </SafeAreaProvider>
    );
  }

  const styles = StyleSheet.create({
    menu: {
        marginLeft: 20,
    }
 })
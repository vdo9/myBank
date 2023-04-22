import { Stack, useRouter, Tabs } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";


// export default Tabs;


export default function Layout() {
    return (
      <SafeAreaProvider>
        <Tabs>
          <Tabs.Screen name="deposit" options={{ tabBarLabel: "Deposit" }} />
          <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />
          <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
        </Tabs>
      </SafeAreaProvider>
    );
  }

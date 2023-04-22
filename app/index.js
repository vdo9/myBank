import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}> 
      {/* <Stack.Screen options={{title: 'Home'}} /> */}
      <View style={styles.main}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>


        <Link href="/deposit" style={styles.link}>Open Deposit</Link>
        <Link href="/profile" style={styles.link}>Open Profile</Link>


        {/* <Link href={{
          pathname: '/profile',
          params: { name: 'Eugene', surname: 'Song'}
        }} style={styles.link}>Open Eugene's Profile</Link> */}

        {/* {users.map(user)} */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
  }
});

import { StyleSheet, Text, View, Image, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 
import CardFront from "../components/CardFront";


export default function Page() {
  return (
    <View style={styles.container}> 
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={false}
        style={{ width: '100%' }}
      >
      {/* <Stack.Screen options={{title: 'Home'}} /> */}
      {/* header greeting */}
      <View style={styles.greeting}>
            <Text style={{
              paddingBottom: 5,
              fontSize: 20,
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              color: 'gray'}}>Good morning </Text>
            <Text style={{
              paddingBottom: 5,
              fontSize: 22,
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
            }}>Bill Song</Text>
            <Text style={{
              paddingBottom: 5,
              fontSize: 15,
              fontFamily: 'Helvetica',
            }}>April 22, 2023</Text>
      </View>

      {/* fraud alerts  */}
      <View style={{
        paddingTop: 10,
      }}>
        <View style={styles.alert}>
          <Ionicons style={{
            paddingRight: 5,
          }}name="warning-outline" size={28} color="white" />
          <View style={{
             alignItems: 'center',
             justifyContent: 'center',
          }}>
              <Text style={{
                color:'white',
                fontWeight: 'bold',
              }}>Suspicious activity on card ending in 0332</Text>
              <Text style={{
                color:'white',
                paddingTop: 5,
              }}>Press to View</Text>
            </View>
        </View>
      </View>

      {/* separator */}
      <View>
        <View style={styles.line} />
      </View>

      {/* checking account */}
      <View>
        <Text style={styles.checking}>
          Checking Account
        </Text>
      </View>

       <CardFront/>       
      {/* <View style={styles.checkingcard}>
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
        </View> */}

      {/*  credit card accounts  */}
    
      <View>
            <Text style={styles.credit}>Credit Cards</Text>
      </View>

      <View>
        <View style={styles.creditcard}>
              <View style={styles.imagePos}>
              <Image
                style={styles.image}
                source={require('../assets/MyBank-inverted-logo.png')}
              />
              </View>
              <View style={styles.numberPos}>
                  <Text style={styles.number}>
                    **** **** **** 0332
                  </Text>
              </View>
        </View>
      </View>

      <View style={styles.main}>

        {/* <Text style={styles.title}>Home Page</Text> */}
        {/* <Text style={styles.subtitle}>This is the first page of your app.</Text> */}
{/* opening other tabs in screen */}
{/* 
        <Link href="/deposit" style={styles.link}>Open Deposit</Link>
        <Link href="/profile" style={styles.link}>Open Profile</Link> */}


        {/* <Link href={{
          pathname: '/profile',
          params: { name: 'Eugene', surname: 'Song'}
        }} style={styles.link}>Open Eugene's Profile</Link> */}

        {/* {users.map(user)} */}

      </View>
      </ScrollView>
    </View>
  );
}

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
    padding: 10,
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
    padding: 10,
    height: 180,
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
    padding: 10,
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
  }
});

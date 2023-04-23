import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import { SharedValue } from "react-native-reanimated";

interface IProps {
  rotate: SharedValue<number>;
}

const CreditBack = ({ rotate }: IProps) => {
  return (
    <Pressable
      onPress={() => {
        rotate.value = rotate.value ? 0 : 1;
      }}
    >
      <View>
        <View style={styles.checkingcard}>
          <View style={styles.creditLabels}>
            <Text
              style={{
                color: "#33658A",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Credit Balance
            </Text>

            <Text
              style={{
                color: "#33658A",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Credit Limit
            </Text>
          </View>

          <View style={styles.amountLabels}>
            <Text
              style={{
                color: "#33658A",
                fontSize: 25,
                fontWeight: "700",
              }}
            >
              $300.30{" "}
            </Text>

            <View style={styles.slashAmount}>
              <Text
                style={{
                  color: "#33658A",
                  fontSize: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                /{" "}
              </Text>
              <Text
                style={{
                  color: "#33658A",
                  fontSize: 25,
                  fontWeight: "700",
                  paddingTop: 3.5,
                }}
              >
                $2,000
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.transcPos}>
          <Text style={{ color: "#33658A" }}>Press to View Transactions</Text>
          <Feather
            style={{ marginLeft: 60, marginTop: 5 }}
            name="chevrons-down"
            size={24}
            color="white"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CreditBack

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
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
    fontWeight: "bold",
  },
  greeting: {
    marginRight: 180,
  },
  alert: {
    flexDirection: "row", // Set direction to row
    alignItems: "center", // Align items along the vertical axis
    justifyContent: "space-between", // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: "#E12C2C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  line: {
    height: 1,
    width: 300,
    backgroundColor: "#DDD9D9",
    marginVertical: 20, // add margin top and bottom
  },
  shadowBox: {
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    backgroundColor: "white",
  },
  checkingcard: {
    flexDirection: "column", // Set direction to row
    alignItems: "center", // Align items along the vertical axis
    justifyContent: "space-between", // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: "#B8B6B6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    height: 180,
    width: 330,
  },
  checking: {
    marginRight: 210,
    paddingBottom: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#4F4C4C",
  },
  credit: {
    marginRight: 250,
    marginTop: 25,
    paddingBottom: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#4F4C4C",
  },
  creditcard: {
    flexDirection: "column", // Set direction to row
    alignItems: "center", // Align items along the vertical axis
    justifyContent: "space-between", // Distribute items evenly along the main axis
    padding: 18,
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: "#B8B6B6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    height: 180,
    width: 330,
  },
  image: {
    width: 100,
    height: 50,
  },
  imagePos: {
    paddingRight: 140,
    paddingTop: 10,
  },
  number: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  transcPos: {
    position: "absolute",
    right: 80,
    top: 120,
    left: 85,
  },
  creditLabels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    right: 40,
    left: 30,
    top: 23,
  },
  amountLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    right: 40,
    left: 30,
    top: 45,
  },
  slashAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // containerFlip: {
  //     backgroundColor: '#023047',
  //     width: 350,
  //     height: 200,
  //     borderRadius: 10,
  //     padding: 20
  //   },
});




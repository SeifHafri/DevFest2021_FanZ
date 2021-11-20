import * as React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import "../fonts/Gilroy-Bold.ttf";
import "../fonts/Gilroy-Medium.ttf";

const Salon = ({ navigation }) => {
  const theme = "dark";

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        // Button Linear Gradient
        colors={["#4D7A91", "#3F5773"]}
      >
        <View style={styles.spacing3}></View>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={require("../../assets/left.png")}
            style={styles.lefting}
          ></Image>
        </View>

        <Text style={styles.title}>Salon TV</Text>
        <Text style={styles.simpletext}>Control your TV</Text>
        <View style={styles.card}>
          <Image
            resizeMode="contain"
            source={require("../../assets/tom.jpg")}
            style={styles.avatar}
          ></Image>
          <View
            style={{
              position: "absolute",
              top: "2%",
              right: "1%",
            }}
          >
            <Text style={styles.Smalltitle}>01h22min</Text>
          </View>
          <Text style={styles.Smalltitle}>Tom and Jerry</Text>
          <Text style={styles.discrpition}>Age: +4</Text>
          <Text style={styles.discrpition}>
            Description : Tom and Jerry is an American cartoon series about a
            hapless cat's never-ending pursuit of a clever mouse. Tom is the
            scheming cat, and Jerry is the spunky mouse.{" "}
          </Text>
        </View>
        <Text style={styles.title}>Spectators</Text>
        <TouchableOpacity
          style={styles.cardspec}
          onPress={() => navigation.navigate("Ayhem", { name: "Ayhem" })}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/1.png")}
            style={styles.avatars}
          ></Image>
          <Text style={styles}>Ayhem</Text>
        </TouchableOpacity>
        <View style={styles.cardspec2}>
          <Image
            resizeMode="contain"
            source={require("../../assets/3.png")}
            style={styles.avatars}
          ></Image>
          <Text style={styles}>Alaa</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("MyTVs", { name: "MyTVs" })}
        ></TouchableOpacity>
        {/* <Text>Open up App.js to start working on your app???????????!!!</Text> */}
        {/* <StatusBar style="auto" /> */}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    width: "100%",

    // alignItems: "center",
    // justifyContent: "center",
  },
  back: {
    height: "8%",
    width: "17%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 200,
    top: "8%",
    left: "5%",
  },
  lefting: {
    width: "8%",
    marginRight: "5%",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    marginTop: "0%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  spacing3: {
    width: "10%",
    height: "10%",
    flex: 0.1,
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,

    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    width: "90%",
    height: "38%",
    flex: 0.38,
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    marginTop: "2%",
    marginLeft: "6%",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  simpletext: {
    marginLeft: "6%",
    fontSize: 18,

    color: "white",
  },
  Smalltitle: {
    marginTop: "2%",
    marginLeft: "5%",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  discrpition: {
    marginLeft: "6%",
    fontSize: 14,
    color: "black",
  },
  avatar: {
    width: "68%",
    height: "37%",
    marginTop: "3%",
    marginLeft: "-8%",
    borderRadius: 20,
  },
  avatars: {
    width: "70%",
    height: "70%",
    borderRadius: 20,
  },
  cardspec: {
    position: "absolute",
    width: "26%",
    height: "12%",
    // flex: 0.155,
    top: "64%",
    left: "5%",
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardspec2: {
    position: "absolute",
    width: "26%",
    height: "12%",
    // flex: 0.155,
    top: "64%",
    left: "35%",
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

Salon.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default Salon;

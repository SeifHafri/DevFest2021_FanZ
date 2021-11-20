import * as React from "react";
import PropTypes from "prop-types";

import {
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
import Switch from "expo-dark-mode-switch";
var a = "8%";
// function showimg() {

//   return 0;

// }

const Parental_Control = ({ navigation }) => {
  const theme = "dark";

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        // Button Linear Gradient
        colors={["#4D7A91", "#3F5773"]}
      >
        <View style={styles.spacing1}></View>

        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={require("../../assets/left.png")}
            style={styles.lefting}
          ></Image>
          <Image
            resizeMode="contain"
            source={require("../../assets/toggle.png")}
            style={styles.ja}
          ></Image>
        </View>

        <View style={styles.spacing2}></View>

        <Text style={styles.title}>Parental Cotrol</Text>
        <Text style={styles.simpletext2}>Make sure that your kid is safe</Text>

        <TouchableOpacity
          style={styles.choseava}
          onPress={() => navigation.navigate("MyTVs", { name: "MyTVs" })}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/coolicon.png")}
            style={styles.tv}
          ></Image>
          <Text style={styles.simpletext}>My TVs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choseava}
          onPress={() => navigation.navigate("MyKids", { name: "MyKids" })}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/Vector2.png")}
            style={styles.tv}
          ></Image>
          <Text style={styles.simpletext}>My Kids</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.choseava}>
          <Image
            resizeMode="contain"
            source={require("../../assets/Vector.png")}
            style={styles.tv}
          ></Image>
          <Text style={styles.simpletext}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("LG2", { name: "LG2" })}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.desac}
          onPress={() => navigation.navigate("Off", { name: "Off" })}
        ></TouchableOpacity>
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
  lefting: {
    width: "8%",
    marginRight: "5%",
    marginTop: "6%",
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
  desac: {
    height: "8%",
    width: "17%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 200,
    top: "10%",
    left: "75%",
  },
  ja: {
    width: "16%",
    marginTop: "5%",
    marginRight: "5%",
  },

  appButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  tv: {
    width: "5%",
    marginRight: "5%",
  },
  bttn: {
    position: "absolute",
    width: "90%",
    height: "8%",
    top: "85%",
    left: "5%",
    borderRadius: 15,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    position: "absolute",
    top: "5%",
    right: "0%",
    width: "36%",
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
  inputdes: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "4%",
    height: "8%",
    borderRadius: 15,
    backgroundColor: "white",
    paddingLeft: "5%",
  },
  title: {
    marginTop: "-60%",
    marginLeft: "7%",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    marginTop: "-45%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  choseava: {
    flexDirection: "row",
    width: "90%",
    height: "8%",
    marginTop: "7%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  simpletext2: {
    marginLeft: "7%",
    fontSize: 18,
    opacity: 1,

    color: "white",
  },
  simpletext: {
    marginLeft: "0%",
    fontSize: 16,
    fontWeight: "bold",
    opacity: 1,

    color: "black",
  },
});

Parental_Control.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default Parental_Control;

import * as React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import "../fonts/Gilroy-Bold.ttf";
import "../fonts/Gilroy-Medium.ttf";

const Danger = ({ navigation }) => {
  const theme = "dark";

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        // Button Linear Gradient
        colors={["#4D7A91", "#3F5773"]}
      >
        <View style={styles.spacing3}></View>
        <Image
          resizeMode="contain"
          source={require("../../assets/4.png")}
          style={styles.avatar}
        ></Image>
        <Text style={styles.title}>Attention!!</Text>
        <Text style={styles.title2}>
          Ayhem peut-être exposer à un contenu inapproprié
        </Text>
        <Text style={styles.title3}>Ignore</Text>

        <TouchableOpacity style={styles.bttn}>
          <Text style={styles.appButtonText}>Control</Text>
          {/* <Image
            resizeMode="contain"
            source={require("../../assets/camera.png")}
            style={styles.camera}
          ></Image> */}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    width: "100%",

    alignItems: "center",
    // justifyContent: "center",
  },
  spacing3: {
    width: "100%",
    height: "43%",
    flex: 0.43,
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,
  },
  appButtonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bttn: {
    position: "absolute",
    width: "90%",
    height: "8%",
    top: "61%",
    left: "5%",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "40%",
    height: "23%",
  },

  title: {
    marginTop: "0%",
    width: "90%",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  title2: {
    marginTop: "1%",
    width: "80%",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  title3: {
    marginTop: "34%",
    width: "80%",
    fontSize: 17,
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
  },
});

Danger.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default Danger;

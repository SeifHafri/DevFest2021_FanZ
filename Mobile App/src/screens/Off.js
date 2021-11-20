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
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={require("../../assets/left.png")}
            style={styles.lefting}
          ></Image>
          <Image
            resizeMode="contain"
            source={require("../../assets/toggleoff.png")}
            style={styles.ja}
          ></Image>
        </View>
        {/* <View style={styles.spacing3}></View> */}
        <Image
          resizeMode="contain"
          source={require("../../assets/4.png")}
          style={styles.avatar}
        ></Image>
        <Text style={styles.title}>Parental Cotrol is Off</Text>
        <Text style={styles.title2}>
          Turn it on to start prottecting your kids
        </Text>
        <TouchableOpacity
          style={styles.desac}
          onPress={() =>
            navigation.navigate("Parental_Control", {
              name: "Parental_Control",
            })
          }
        ></TouchableOpacity>

        {/* <TouchableOpacity style={styles.bttn}>
          <Text style={styles.appButtonText}>Control</Text>
           <Image
            resizeMode="contain"
            source={require("../../assets/camera.png")}
            style={styles.camera}
          ></Image> 
        </TouchableOpacity> */}
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
  desac: {
    height: "8%",
    width: "17%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 200,
    top: "10%",
    left: "77%",
  },
  lefting: {
    width: "8%",
    marginLeft: "-2%",
    marginTop: "5%",
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
  ja: {
    width: "16%",
    marginTop: "2%",
    marginRight: "5%",
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
  spacing3: {
    width: "100%",
    height: "0%",
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
    marginTop: "-35%",
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

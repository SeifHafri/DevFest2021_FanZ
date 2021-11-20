import * as React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import "../fonts/Gilroy-Bold.ttf";
import "../fonts/Gilroy-Medium.ttf";

const KidDone = ({ navigation }) => {
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
        <Image
          resizeMode="contain"
          source={require("../../assets/2.png")}
          style={styles.avatar}
        ></Image>
        <Text style={styles.title}>
          Congratulations! Ayhem has been registred.
        </Text>

        <TouchableOpacity
          style={styles.bttn}
          onPress={() =>
            navigation.navigate("Parental_Control", {
              name: "Parental_Control",
            })
          }
        >
          <Text style={styles.appButtonText}>Go Home</Text>
          {/* <Image
            resizeMode="contain"
            source={require("../../assets/camera.png")}
            style={styles.camera}
          ></Image> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() =>
            navigation.navigate("Parental_Control", {
              name: "Parental_Control",
            })
          }
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

    alignItems: "center",
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
    marginTop: "-24%",
    marginBottom: "20%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  spacing3: {
    width: "100%",
    height: "37%",
    flex: 0.37,
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,
  },
  appButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bttn: {
    position: "absolute",
    width: "90%",
    height: "8%",
    top: "88%",
    left: "5%",
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: "40%",
    height: "24%",
  },

  title: {
    marginTop: "0%",
    width: "90%",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
KidDone.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default KidDone;

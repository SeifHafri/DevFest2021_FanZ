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
var a = "8%";
// function showimg() {

//   return 0;
// }

const MyKids = ({ navigation }) => {
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
        </View>

        <Text style={styles.title}>Ayhem's Dashbord</Text>
        <Text style={styles.simpletext3}>
          Here’s the statistics of your kid
        </Text>

        <Image
          resizeMode="contain"
          source={require("../../assets/chart.png")}
          style={styles.tv}
        ></Image>

        <Image
          resizeMode="contain"
          source={require("../../assets/under.png")}
          style={styles.tv2}
        ></Image>
        <TouchableOpacity
          style={styles.back}
          onPress={() =>
            navigation.navigate("Salon", {
              name: "Salon",
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
  spacing1: {
    width: "10%",
    flex: 0.1,
    marginTop: "15%",
    marginLeft: "5%",
    borderRadius: 25,

    // alignItems: "center",
    // justifyContent: "center",
  },
  both: {
    flexDirection: "row",
    width: "96%",
    marginLeft: "2%",
  },
  both2: {
    flexDirection: "row",
    marginTop: "-25%",
    width: "96%",
    marginLeft: "2%",
  },
  tv: {
    marginTop: "-30%",
    width: "90%",
    marginLeft: "5%",
  },
  tv2: {
    marginTop: "-70%",
    width: "90%",
    marginLeft: "5%",
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
    marginTop: "2%",
    marginLeft: "7%",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
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
  choseava: {
    width: "44%",
    height: "56%",
    marginTop: "7%",
    marginRight: "3%",
    marginLeft: "3%",
    borderRadius: 15,
    paddingLeft: "5%",

    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  choseava2: {
    width: "44%",
    height: "35%",
    marginTop: "7%",
    marginRight: "3%",
    marginLeft: "3%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  simpletext2: {
    marginLeft: "4%",
    fontSize: 14,
    opacity: 1,

    color: "black",
  },
  simpletext3: {
    marginLeft: "7%",
    fontSize: 18,
    opacity: 1,

    color: "white",
  },
  simpletext: {
    marginLeft: "4%",
    fontSize: 16,
    fontWeight: "bold",
    opacity: 1,

    color: "black",
  },
});

MyKids.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default MyKids;

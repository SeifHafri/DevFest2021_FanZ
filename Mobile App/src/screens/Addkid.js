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

const Addkid = ({ navigation }) => {
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

        <Text style={styles.title}>Enter your Kid</Text>
        <Text style={styles.simpletext2}>Let us recognize your kid</Text>
        <TextInput
          style={styles.inputdes}
          // onChangeText={onChangeNumber}
          placeholder="NAME"
          // value={value}
        />
        <TextInput
          style={styles.inputdes}
          // onChangeText={onChangeNumber}
          placeholder="BirthDay"
          // value={value}
        />
        <TouchableOpacity style={styles.choseava}>
          <Text style={styles.simpletext}>Choose Avatar</Text>
          {/* <Image
            resizeMode="contain"
            source={require("../../assets/down.png")}
            style={styles.arrow}
          ></Image> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bttn}
          onPress={() =>
            navigation.navigate("KidDone", {
              name: "KidDone",
            })
          }
        >
          <Text style={styles.appButtonText}>Take a picture</Text>
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

    // alignItems: "center",
    // justifyContent: "center",
  },
  spacing3: {
    width: "10%",
    height: "25%",
    flex: 0.25,
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: 25,

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
    marginTop: "-10%",
    marginBottom: "10%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  appButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  arrow: {
    position: "absolute",
    top: "-368%",
    right: "6%",
    width: "3.6%",
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
  choseava: {
    width: "90%",
    height: a,
    marginTop: "4%",
    marginLeft: "5%",
    borderRadius: 15,
    paddingLeft: 15,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
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
    opacity: 0.7,

    color: "grey",
  },
});

Addkid.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

export default Addkid;

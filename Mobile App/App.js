import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import * as Permissions from "expo-permissions";

import Salon from "./src/screens/Salon";
import Addkid from "./src/screens/Addkid";
import KidDone from "./src/screens/KidDone";
import Danger from "./src/screens/Danger";
import Parental_Control from "./src/screens/Parental_Control";
import MyTVs from "./src/screens/MyTVs";
import MyKids from "./src/screens/MyKids";
import Ayhem from "./src/screens/Ayhem";
import LG from "./src/screens/LG";
import LG2 from "./src/screens/LG2";
import Off from "./src/screens/Off";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    this.setState({ expoPushToken: token });
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};
// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//   } else {
//     console.log("Must use physical device for Push Notifications");
//   }
//   if (Platform.OS === "android") {
//     Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }
//   return token;
// }

// export default useNotifications = () => {

//   useEffect(() => {
//       registerForPushNotificationsAsync().then((token) => {
//           setExpoPushToken(token);
//           alert(token);
//       });

//       notificationListener.current = Notifications.addNotificationReceivedListener(
//           (notification) => {
//               setNotification(notification);
//               console.log(notification);
//           }
//       );

//       responseListener.current = Notifications.addNotificationResponseReceivedListener(
//           (response) => {
//               //notification is received OK
//               console.log("opened");

//               //here I want to navigate to another screen using rootnavigation
//               navigation.navigate("Account");

//               //alert shows fine
//               alert("ok");
//           }
//       );

//       return () => {
//           Notifications.removeNotificationSubscription(notificationListener);
//           Notifications.removeNotificationSubscription(responseListener);
//       };
//   }, []);
// };

export default function App() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const { danger, setDanger } = useState(false);
  useEffect(() => {
    if (Constants.isDevice && Platform.OS !== "web") {
      registerForPushNotificationsAsync().then((token) => {
        axios.post(`https://nativenotify.com/api/expo/key`, {
          appId: 532,
          appToken: "JKC6fgdJjDstrevTfAHfcd",
          expoToken: token,
        });
      });
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) =>
          console.log(response)
        );
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          //notification is received OK
          console.log("opened");
          // setDanger(true);

          // navigation.navigate("Danger", { name: "Danger" });

          //here I want to navigate to another screen using rootnavigation
          // navigation.navigate("Account");

          //alert shows fine
          // alert("ok");
        });
      return () => {
        Notifications.removeNotificationSubscription(notificationListener);
        Notifications.removeNotificationSubscription(responseListener);
      };
    }
  }, [danger]);

  async function registerForPushNotification() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // finalStatus = status;
    }
    if (status !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LG" component={LG} />
        <Stack.Screen name="LG2" component={LG2} />
        <Stack.Screen name="Salon" component={Salon} />
        <Stack.Screen name="Ayhem" component={Ayhem} />
        <Stack.Screen name="MyKids" component={MyKids} />
        <Stack.Screen name="MyTVs" component={MyTVs} />
        <Stack.Screen name="Addkid" component={Addkid} />
        <Stack.Screen name="Danger" component={Danger} />
        <Stack.Screen name="KidDone" component={KidDone} />
        <Stack.Screen name="Off" component={Off} />
        <Stack.Screen name="Parental_Control" component={Parental_Control} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

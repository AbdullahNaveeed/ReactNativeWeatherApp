import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const Splash = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace("Home"); 
    }, 2000); 
  },[loading]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Entypo name="thunder-cloud" size={60} color="#226ba3" />
        <Text style={styles.textContainer}>Weather App</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
});

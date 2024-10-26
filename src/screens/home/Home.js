// Home.js
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Search from "../../components/search/search";
import CurrentWeather from "../../components/currentweather/CurrentWeather";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const handleOnSearchChange = (searchData) => {
    console.log("Search changed: ", searchData);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled" 
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#d5d4d4",
  },
});

import { StyleSheet, Text, View } from "react-native";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
export default function App() {
  
  return <RootStackNavigation />;
  // return (
  // <View className="body">
  //return <Search onSearchChange={handleOnSearchChange} />;
  // </View>
  // );
}

const styles = StyleSheet.create({
  body: {
    margin: 0,
    fontFamily: "Roboto",
    backgroundColor: "#d5d4d4",
  },
});

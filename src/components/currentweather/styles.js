import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  weather: {
    width: 300,
    borderRadius: 6,
    backgroundColor: "#333",
    color: "#fff",
    margin: 20,
    padding: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  city: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 1,
  },
  weatherDescription: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  bottom: {
    alignItems: "center",
  },
  temperature: {
    fontWeight: "600",
    fontSize: 70,
    color: "white",
    letterSpacing: -5,
    marginVertical: 10,
  },
  details: {
    width: "100%",
    paddingLeft: 20,
  },
  parameterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parameterLabel: {
    fontWeight: "400",
    color: "white",
    fontSize: 12,
  },
  parameterValue: {
    fontWeight: "600",
    color: "white",
    fontSize: 12,
  },
});

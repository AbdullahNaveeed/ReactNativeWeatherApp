import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: "700",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  dailyItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    height: 60,
    margin: 5,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  iconSmall: {
    width: 40,
    height: 40,
  },
  day: {
    color: "#212121",
    flex: 1,
    fontWeight: "600",
    marginLeft: 15,
  },
  description: {
    flex: 1,
    textAlign: "right",
    marginRight: 15,
  },
  minMax: {
    color: "#757575",
  },
  dailyDetailsGrid: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  dailyDetailsGridItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    color: "#757575",
  },
  value: {
    color: "#212121",
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "red",
  },
});

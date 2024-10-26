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
    shadowColor: "#000",
    shadowOffset: { width: 10, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    padding: 16,
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    marginBottom: 10,
    marginTop:5,
    marginHorizontal: 10,
    

  },
  dailyDetailsGridItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    color: "#666666",
  },
  value: {
    color: "#000000",
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "red",
  },
});

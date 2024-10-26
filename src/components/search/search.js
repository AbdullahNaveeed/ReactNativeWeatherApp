import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const loadOptions = async (inputValue) => {
    if (!inputValue) return;
    setLoading(true);
    fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response || !response.data) {
          console.error("Unexpected response structure:", response);
          setResults([]);
          return;
        }
        setResults(
          response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value);
    loadOptions(value); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
console.log(results);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput
            label="Search for city"
            value={search}
            onChangeText={handleOnChange}
            style={styles.input}
            mode="outlined"
            theme={{
              colors: {
                primary: "#000",
                placeholder: "#fff",
                text: "#000",
                background: "#fff",
                underlineColor: "transparent",
              },
            }}
          />
          {loading ? (
            <Text style={styles.loadingText}>Loading...</Text>
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item) => item.value}
              renderItem={renderItem}
              style={styles.resultsList}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    
    backgroundColor: "#d5d4d4",
  },
  container: {
    margin: 16,
    borderRadius: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  loadingText: {
    textAlign: "center",
    marginVertical: 10,
  },
  resultsList: {
    marginTop: 10,
  },
  resultItem: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

// Home.js
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Search from "../../components/search/search";
import CurrentWeather from "../../components/currentweather/CurrentWeather";
import { SafeAreaView } from "react-native-safe-area-context";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api";
import Forecast from "../../components/forecast/forecast";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    if (!searchData || !searchData.value) {
      console.log("Invalid search data", searchData);
      return;
    }
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const ForecastFetch = fetch(
      `${WEATHER_API_URL}//forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, ForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log("Hello Forecast", forecast);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </View>
    </SafeAreaView>
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

// CurrentWeather.js
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { weatherIcons } from "../../data/data";

const CurrentWeather = ({ data }) => {
  const tempConverter = (Kelvin) => {
    const celsius = Kelvin - 273.15;
    return Math.round(celsius);
  };
  return (
    <View style={styles.weather}>
      <View style={styles.top}>
        <View>
          <Text style={styles.city}>{`${data.city}`}</Text>
          <Text style={styles.weatherDescription}>
            {data.weather[0].description}
          </Text>
        </View>
        <Image
          style={styles.weatherIcon}
          source={weatherIcons[data.weather[0].icon]}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.temperature}>{`${tempConverter(
          data.main.temp
        )}°C`}</Text>
        <View style={styles.details}>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Details</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Feels like</Text>
            <Text style={styles.parameterValue}>
              {tempConverter(data.main.feels_like)}
            </Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Wind</Text>
            <Text style={styles.parameterValue}> {data.wind.speed}</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Humidity</Text>
            <Text style={styles.parameterValue}>{data.main.humidity}</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Pressure</Text>
            <Text style={styles.parameterValue}>{data.main.pressure}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;

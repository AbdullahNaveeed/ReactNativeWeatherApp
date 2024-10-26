// CurrentWeather.js
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const CurrentWeather = () => {
  return (
    <View style={styles.weather}>
      <View style={styles.top}>
        <View>
          <Text style={styles.city}>Belgrade</Text>
          <Text style={styles.weatherDescription}>Sunny</Text>
        </View>
        <Image
          style={styles.weatherIcon}
          source={require("../../assets/icons/01d.png")}
        />
      </View>
      <View style={styles.bottom}>
        {/* {Math.round(data.main.temp)} */}
        <Text style={styles.temperature}>18°C</Text>
        <View style={styles.details}>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Details</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Feels like</Text>
            <Text style={styles.parameterValue}>
              {/*  {Math.round(data.main.feels_like)} */}
              20°C
            </Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Wind</Text>
            {/* {data.wind.speed} */}
            <Text style={styles.parameterValue}> 120m/s</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Humidity</Text>
            {/* {data.main.humidity} */}
            <Text style={styles.parameterValue}>10%</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Pressure</Text>
            {/* {data.main.pressure} */}
            <Text style={styles.parameterValue}>120 hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;

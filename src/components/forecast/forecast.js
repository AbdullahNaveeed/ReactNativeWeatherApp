import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { WEEK_DAYS, weatherIcons } from "../../data/data";
import { styles } from "./styles";

const Forecast = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected index

  if (!data || !data.list) {
    return <Text style={styles.errorText}>No data available</Text>;
  }

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const renderHeader = () => <Text style={styles.title}>Daily Forecast</Text>;

  const renderContent = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => setSelectedIndex(index === selectedIndex ? null : index)}
        style={styles.dailyItem}
      >
        <Image
          source={weatherIcons[item.weather[0].icon]}
          style={styles.iconSmall}
        />
        <Text style={styles.day}>{forecastDays[index]}</Text>
        <Text style={styles.description}>{item.weather[0].description}</Text>
        <Text style={styles.minMax}>
          {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}
          °C
        </Text>
      </TouchableOpacity>
      {/* Show details if this item is selected */}
      {selectedIndex === index && (
        <View style={styles.dailyDetailsGrid}>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Pressure:</Text>
            <Text style={styles.value}>{item.main.pressure} hPa</Text>
          </View>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Humidity:</Text>
            <Text style={styles.value}>{item.main.humidity}%</Text>
          </View>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Clouds:</Text>
            <Text style={styles.value}>{item.clouds.all}%</Text>
          </View>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Wind Speed:</Text>
            <Text style={styles.value}>{item.wind.speed} m/s</Text>
          </View>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Sea Level:</Text>
            <Text style={styles.value}>{item.main.sea_level} m</Text>
          </View>
          <View style={styles.dailyDetailsGridItem}>
            <Text style={styles.label}>Feels Like:</Text>
            <Text style={styles.value}>
              {Math.round(item.main.feels_like)}°C
            </Text>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        data={data.list.slice(0, 7)} // Limiting to 7 days
        renderItem={renderContent}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#f5f5f5" }} />
        )}
      />
    </ScrollView>
  );
};

export default Forecast;

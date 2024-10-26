import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Splash from "../screens/splash/Splash";
import Search from "../components/search/search";
import CurrentWeather from "../components/currentweather/CurrentWeather";

// Create a Stack Navigator instance
const Stack = createStackNavigator();

const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Current Weather"
          component={CurrentWeather}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;

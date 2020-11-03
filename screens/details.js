import React, { useState, useEffect } from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";
import {
  Card,
  Avatar,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Spinner,
} from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../actions";
import { backgroundObj } from "../resources/backgrounds";
import checkUnit from '../utils/checkUnit';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ route, navigation }) => {
  const [message, setMessage] = useState("");
  const isLoading = useSelector((state) => state.loadStatus);
  const dispatch = useDispatch();
  // const [weather, setWeather] = useState([]);
  // const [temp, setTemp] = useState({});
  // const [cityInfo, setCityInfo] = useState({
  //   name: "",
  //   country: "",
  //   longitude: "",
  //   latitude: "",
  //   timezone: 0,
  // });
  const [weatherData, setWeatherData] = useState({});

  const unit = useSelector((state) => state.unit)

  const { cityName } = route.params;

  const _ = require('lodash');

  useEffect(() => {
    const getWeather = async (cityName) => {
      await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=9d6a699501bb5a1082c4a49bff3d3c35",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((json) => {
          dispatch(load());
          if (json.name) {
            setWeatherData(json)
          } else {
            setMessage(json.message);
          }
        })
        .catch((error) => {
          dispatch(load());
          console.log("Error " + error);
        });
    };

    getWeather(cityName);
    dispatch(load());
  }, []);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const temperature = _.get(weatherData,'main.temp');
  const weatherMain = _.get(weatherData,'weather[0].main');
  const country = _.get(weatherData,'sys.country');

  const imgURL =
  "https://www.countryflags.io/" + country  + "/flat/64.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Weather App"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />

      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {isLoading ? (
          <Spinner size="large" style={{ zIndex: 7 }} />
        ) : (
          <>
            {!weatherData.name ? (
              <Text category="p" style={{ marginBottom: 5 }}>
                Message: {message.toUpperCase()}{" "}
              </Text>
            ) : (
              <>
                <Image
                  source={{ uri: backgroundObj[weatherMain ? weatherMain.toLowerCase() : "clouds"] }}
                  style={styles.backgroundImage}
                />
                <Card style={{ margin: 10 }}>
                  <Avatar source={{ uri: imgURL }} />
                  <Text category="h1" style={{ marginBottom: 5 }}>
                    {checkUnit(temperature, unit.unit)}
                  </Text>
                  <Text category="h3" style={{ marginBottom: 5 }}>
                    {weatherData.name}, {country}
                  </Text>
                  <Text category="p" style={{ marginBottom: 5 }}>
                    Timezone: {weatherData.timezone}{" "}
                  </Text>
                  <Text category="p" style={{ marginBottom: 5 }}>
                    Longitude: {_.get(weatherData,'coord.lon')}
                  </Text>
                  <Text category="p" style={{ marginBottom: 5 }}>
                    Latitude: {_.get(weatherData,'coord.lat')}
                  </Text>
                  {weatherData.weather.map((weath, index) => (
                    <>
                      <Text category="p">Weather: {weath.main}</Text>
                      <Text category="p">Description: {weath.description}</Text>
                    </>
                  ))}
                </Card>
              </>
            )}
          </>
        )}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
});

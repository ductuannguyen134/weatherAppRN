import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Divider, TopNavigation } from "@ui-kitten/components";
import { useSelector, useDispatch } from "react-redux";
import HomeDisplay from "../components/templates/HomeDisplay";
import { load, changeLocation } from "../actions";
import checkUnit from '../utils/checkUnit';

export const HomeScreen = ({ navigation }) => {
  const _ = require('lodash');
  const isLoading = useSelector((state) => state.loadStatus);
  const city = useSelector((state) => state.location);
  const unit = useSelector((state) => state.unit);

  const [input, setInput] = useState("");

  const navigateDetails = () => {
    navigation.navigate("Details", { cityName: input });
    setInput("")
  };

  const handleSubmit = () => {
    navigateDetails();
  };

  const temperature = _.get(city.location,'main.temp');
  const weatherMain = _.get(city.location,'weather[0].main');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Weather App" alignment="center" />
      <Divider />
      <HomeDisplay
          cityName={city.location.name}
          countryName= {_.get(city.location,'sys.country')}
          temperature= {temperature && checkUnit(temperature, unit.unit)}
          value={input}
          onPress={handleSubmit}
          onChangeText={(val) => setInput(val)}
          weather={weatherMain ? weatherMain.toLowerCase() : "clouds"}
      />
    </SafeAreaView>
  );
};

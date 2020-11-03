import React, {useState} from "react";
import { View, SafeAreaView } from "react-native";
import {
  Card,
  Avatar,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  Spinner,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CityNameEnter from '../components/organisms/CityNameEnter';
import {useSelector, useDispatch} from 'react-redux';
import { load, changeLocation } from "../actions";

const ChangeLocation = ({ navigation }) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
  const city = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadStatus);
  const [message, setMessage] = useState("");

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const [input, setInput] = useState("");

  const handleSubmit =  () => {
    dispatch(changeLocation(input));
    setInput("");

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
            dispatch(changeLocation(json))
          } else {
            setMessage(json.message);
          }
        })
        .catch((error) => {
          dispatch(load());
          console.log("Error " + error);
        });
      }
      getWeather(input);
      dispatch(load());
      // navigation.goBack();
    }

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
        {isLoading && <Spinner />}
        {!city.location.name ? <Text>{message.toUpperCase()}</Text> : (
        <>
          <Text>Changed your location to: {city.location.name}</Text>
        </>
        )}
        <CityNameEnter value={input} onPress={handleSubmit} onChangeText={(val)=> setInput(val)} />
        
      </Layout>
    </SafeAreaView>
  );
};

export default ChangeLocation;

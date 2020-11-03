import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Button, Divider, Icon, Modal, Text, TopNavigation, Spinner, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {load, toCelsius, toKevin, toFahrenheit} from '../actions';

const SmartphoneIcon = (props) => (
  <Icon {...props} name='smartphone-outline'/>
);

const BrowserIcon = (props) => (
  <Icon {...props} name='browser-outline'/>
);

const ColorPaletteIcon = (props) => (
  <Icon {...props} name='color-palette-outline'/>
);


const Settings = ({navigation}) => {

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const unit = useSelector((state) => state.unit);
    const dispatch = useDispatch();

    const StarIcon = (props) => (
        <Icon {...props} name='star'/>
      );
      
      
      const handleSubmit = () => {
          navigation.navigate('ChangeLocation');
      }
      

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Weather App' alignment='center'/>
            <Divider/>
            <Menu
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <MenuItem onPress={handleSubmit} title='Change Location' accessoryLeft={StarIcon}/>
                <MenuGroup title='Change temperature unit' accessoryLeft={BrowserIcon}>
                    <MenuItem onPressOut={()=>{dispatch(toCelsius());navigation.navigate("Home")}} title='To Celsius' accessoryLeft={StarIcon}/>
                    <MenuItem onPressOut={()=>{dispatch(toFahrenheit());navigation.navigate("Home")}} title='To Fahrenheit' accessoryLeft={StarIcon}/>
                    <MenuItem onPressOut={()=>{dispatch(toKevin());navigation.navigate("Home")}} title='To Kevin' accessoryLeft={StarIcon}/>
                </MenuGroup>
            </Menu>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Settings

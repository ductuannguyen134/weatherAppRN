import React from 'react'
import CityNameEnter from '../../organisms/CityNameEnter'
import CurrentInfo from '../../organisms/CurrentInfo'
import {backgroundObj} from '../../../resources/backgrounds'
import {Layout} from '@ui-kitten/components'
import {StyleSheet, Image} from 'react-native'
import {useSelector} from 'react-redux'

const HomeDisplay = ({cityName, countryName, temperature, value, onPress, onChangeText, weather}) => {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{uri: backgroundObj[weather]}} style= { styles.backgroundImage }/>
            <CurrentInfo cityName={cityName} countryName={countryName} temperature={temperature} weather={weather}/>
            <CityNameEnter value={value} onPress={onPress} onChangeText={onChangeText}/>
        </Layout>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    }
})

export default HomeDisplay

import React from 'react'
import CardAtom from '../../atoms/CardAtom'
import CityInput from '../../molecules/CityInput'
import {StyleSheet} from 'react-native'

const CityNameEnter = ({value, onChangeText, onPress}) => {
    return (
        <CardAtom style={styles.card}>
            <CityInput value={value} onChangeText={onChangeText} onPress={onPress}>Enter City Name:</CityInput>
        </CardAtom>
    )
}

const styles = StyleSheet.create({
   card:{
        width: '80%',
        margin: 5
    }
})

export default CityNameEnter

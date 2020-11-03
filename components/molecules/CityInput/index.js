import React from 'react'
import TextInput from '../../atoms/TextInput'
import ButtonAtom from '../../atoms/ButtonAtom'
import Subtitle from '../../atoms/Subtitle'
import {Layout} from '@ui-kitten/components'

const CityInput = ({children, value, onChangeText, onPress}) => {
    return (
        <Layout style={{}}>
            <TextInput placeholder={children} value={value} onChangeText={onChangeText} />
            <ButtonAtom onPress={onPress}>Submit</ButtonAtom>
        </Layout>
    )
}

export default CityInput

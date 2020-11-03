import React from 'react'
import {Input} from '@ui-kitten/components'

const TextInput = ({children, value, onChangeText, placeholder}) => {
    return (
        <Input value={value} placeholder={placeholder} onChangeText={onChangeText}>
            {children}
        </Input>
    )
}

export default TextInput

import React from 'react'
import {Text} from '@ui-kitten/components'

const Title = ({children}) => {
    return (
        <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
            {children}
        </Text>
    )
}

export default Title

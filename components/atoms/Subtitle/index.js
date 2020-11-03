import React from 'react'
import {Text} from '@ui-kitten/components'

const Subtitle = ({children}) => {
    return (
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
            {children}
        </Text>
    )
}

export default Subtitle

import React from 'react'
import { Text } from '@ui-kitten/components'

const ParagraphText = ({children}) => {
    return (
        <Text category="p" style={{ marginBottom: 5 }}>
            {children}
        </Text>
    )
}

export default ParagraphText

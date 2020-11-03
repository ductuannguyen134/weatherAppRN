import React from 'react'
import {Card} from '@ui-kitten/components'

const CardAtom = ({children, style}) => {
    return (
        <Card style={style}>
            {children}
        </Card>
    )
}

export default CardAtom

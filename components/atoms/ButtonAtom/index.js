import React from 'react'
import {Button} from '@ui-kitten/components'

const ButtonAtom = ({children, onPress}) => {
    return (
        <Button onPress={onPress}>
            {children}
        </Button>
    )
}

export default ButtonAtom

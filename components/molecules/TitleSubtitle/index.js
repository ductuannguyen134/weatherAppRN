import React from 'react'
import Title from '../../atoms/Title'
import Subtitle from '../../atoms/Subtitle'
import {Layout} from '@ui-kitten/components'
import CardAtom from '../../atoms/CardAtom'

const TitleSubtitle = ({title, subtitle}) => {
    return (
        <Layout style={{ flexDirection:'column'}}>
            <CardAtom>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </CardAtom> 
        </Layout>
    )
}

export default TitleSubtitle

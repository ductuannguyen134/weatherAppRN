import React from 'react'
import CardAtom from '../../atoms/CardAtom'
import TitleSubtitle from '../../molecules/TitleSubtitle'
import {Layout} from '@ui-kitten/components'


const CurrentInfo = ({cityName, countryName, temperature, weather}) => {
    return (
            <CardAtom>
                <Layout style={{flexDirection: 'row'}}>
                    <TitleSubtitle title={cityName} subtitle={countryName} />
                    <TitleSubtitle title={temperature} subtitle={weather} />
                </Layout>
            </CardAtom>
    )
}

export default CurrentInfo

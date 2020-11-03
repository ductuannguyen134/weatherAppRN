import React from 'react'
import { Image, StyleSheet } from 'react-native'

const BackgroundImage = ({imgURL}) => {
    return (
        <Image source={{ uri: imgURL }} style={styles.backgroundImage} />
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.3,
    },
  });
  

export default BackgroundImage

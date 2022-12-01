import React from "react";
import { Image, StyleSheet } from "react-native";
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 400,
    borderRadius: 18,
    borderColor: "#000",
  },
});

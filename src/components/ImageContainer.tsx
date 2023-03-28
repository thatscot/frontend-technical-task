import { Image, StyleSheet } from "react-native";
import React from "react";

export const ImageContainer = ({
  url,
  style,
  onLoadEnd = () => {},
}: {
  url: string;
  style: { height: number | string; width: number | string };
  onLoadEnd?: () => void;
}) => {
  const stylesheet = React.useMemo(
    () =>
      StyleSheet.create({
        image: { height: style.height, width: style.width },
      }),
    [style]
  );

  return (
    <Image
      source={{ uri: url }}
      style={stylesheet.image}
      onLoadEnd={onLoadEnd}
    ></Image>
  );
};

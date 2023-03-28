import React, { useMemo } from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  FadeInUp,
  Layout,
  FadeInDown,
} from "react-native-reanimated";

const BottomSheet = ({
  onPressDelete,
  modalToggle,
}: {
  onPressDelete: () => void;
  modalToggle: () => void;
}) => {
  const width = Dimensions.get("window").width;

  const stylesheet = useMemo(() => {
    return StyleSheet.create({
      bottomSheet: {
        backgroundColor: "#142538",
        height: 500,
        width: width,
        position: "absolute",
        bottom: -350,
      },
      confirmationText: {
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        color: "white",
        paddingBottom: 20,
      },
    });
  }, [width]);

  return (
    <Animated.View
      style={stylesheet.bottomSheet}
      entering={FadeInDown}
      layout={Layout.springify()}
    >
      <Text style={stylesheet.confirmationText}>
        Please confirm you would like to remove this dog?
      </Text>
      <Button
        color={"#FE6C1A"}
        title={"Confirm Deletion"}
        onPress={onPressDelete}
      />
      <Button color={"#FE6C1A"} title={"Cancel"} onPress={modalToggle} />
    </Animated.View>
  );
};

export { BottomSheet };

import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const stylesheet = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingBottom: 10,
  },
  navButton: {
    width: "50%",
    borderRadius: 0,
    backgroundColor: "#142538",
    height: 50,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 3,
    borderColor: "#FE6C1A",
  },
  navText: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 25,
  },
});

export const Nav = ({ setShowFindADog }: { setShowFindADog: Function }) => {
  return (
    <View style={stylesheet.nav}>
      <Pressable
        style={stylesheet.navButton}
        onPress={() => setShowFindADog((prevState: boolean) => !prevState)}
      >
        <Text style={stylesheet.navText}> Find a Dog </Text>
      </Pressable>

      <Pressable
        style={stylesheet.navButton}
        onPress={() => setShowFindADog((prevState: boolean) => !prevState)}
      >
        <Text style={stylesheet.navText}> Dog Scroller </Text>
      </Pressable>
    </View>
  );
};

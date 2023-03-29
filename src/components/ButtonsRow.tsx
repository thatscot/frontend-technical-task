import { StyleSheet, Button, View } from "react-native";
import React from "react";
interface ButtonProps {
  onPress: Function;
  title: string;
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: "0.5pt",
    marginTop: "0.3pt",
  },
});

export const ButtonsRow = ({
  buttonProps,
}: {
  buttonProps: Array<ButtonProps>;
}) => {
  return (
    <View style={styles.buttonsContainer}>
      {buttonProps.map((button) => {
        return (
          <View style={styles.buttonWrapper}>
            <Button
              color={"#142538"}
              onPress={() => button.onPress()}
              title={button.title}
            />
          </View>
        );
      })}
    </View>
  );
};

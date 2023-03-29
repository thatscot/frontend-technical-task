import { View, Text, StyleSheet, Button } from "react-native";
import { useDogContext } from "../utils/DogContext";
import React, { useState } from "react";
import { ImageContainer } from "./ImageContainer";
import { ButtonsRow } from "./ButtonsRow";
import { BottomSheet } from "./BottomSheet";

const stylesheet = StyleSheet.create({
  dogScrollerPage: {
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  dogName: {
    textAlign: "center",
    fontSize: 30,
  },
  fallbackText: {
    fontSize: 30,
    textAlign: "center",
  },
});

export const DogScroller = () => {
  const { dogs, removeDog } = useDogContext();

  const [imageIndex, setImageIndex] = useState(dogs.length === 1 ? 0 : 1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const imageOne = dogs[imageIndex - 1] ? dogs[imageIndex - 1].url : "";
  const imageTwo = dogs[imageIndex] ? dogs[imageIndex].url : "";
  const imageThree = dogs[imageIndex + 1] ? dogs[imageIndex + 1].url : "";

  const deleteDog = () => {
    removeDog(imageIndex);
    setShowDeleteModal((prevState) => !prevState);
    setImageIndex((prevState) => prevState - 1);
  };

  const toggleModal = () => {
    setShowDeleteModal((prevState) => !prevState);
  };

  return (
    <View>
      {dogs.length > 0 && (
        <View>
          <View style={stylesheet.container}>
            <ImageContainer url={imageOne} style={{ height: 250, width: 80 }} />
            <ImageContainer
              url={imageTwo}
              style={{ height: 300, width: 200 }}
            />
            <ImageContainer
              url={imageThree}
              style={{ height: 250, width: 80 }}
            />
          </View>
          <View>
            {dogs[imageIndex] && (
              <Text style={stylesheet.dogName}>
                Name: {dogs[imageIndex].name}
              </Text>
            )}
          </View>
          <ButtonsRow
            buttonProps={[
              {
                title: "Previous",
                onPress: () => {
                  if (imageIndex > 0) {
                    setImageIndex((prevState) => prevState - 1);
                  }
                },
              },
              {
                title: "Next",
                onPress: () => {
                  if (imageIndex !== dogs.length - 1) {
                    setImageIndex((prevState) => prevState + 1);
                  }
                },
              },
            ]}
          />
          <Button
            color={"#142538"}
            title={"Delete Dog"}
            onPress={toggleModal}
          />
          {showDeleteModal && (
            <BottomSheet onPressDelete={deleteDog} modalToggle={toggleModal} />
          )}
        </View>
      )}
      {!dogs.length && (
        <View>
          <Text style={stylesheet.fallbackText}>
            Please add a Dog to your list from the Find a Dog screen.
          </Text>
        </View>
      )}
    </View>
  );
};

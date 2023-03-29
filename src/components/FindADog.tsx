import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useDogContext } from "../utils/DogContext";
import { ImageContainer } from "./ImageContainer";
import { ButtonsRow } from "./ButtonsRow";

const styles = StyleSheet.create({
  component: {
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
    padding: 10,
    marginTop: 10,
  },
});

const fetchDog = async (callback: Function) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const responseData = await response.json();

  if (responseData.message) {
    callback(responseData.message);
  }
};

export const FindADog = () => {
  const [imgURL, setImgURL] = useState<string | undefined>(undefined);
  const [dogName, setDogName] = useState("");
  const [imageLoading, setImageLoading] = useState(true);

  const { addDog } = useDogContext();

  useEffect(() => {
    if (!imgURL) {
      fetchDog(setImgURL);
    }
  }, []);

  return (
    <View style={styles.component}>
      {imageLoading && <Text> Loading image ...</Text>}
      {imgURL && (
        <View>
          <ImageContainer
            onLoadEnd={() => setImageLoading(false)}
            url={imgURL}
            style={{ height: 300, width: 270 }}
          />
          <TextInput
            value={dogName}
            placeholder={"Dog name"}
            onChangeText={setDogName}
            style={styles.input}
          />
          <ButtonsRow
            buttonProps={[
              {
                title: "Fetch Dog",
                onPress: () => {
                  fetchDog(setImgURL);
                },
              },
              {
                title: "Submit Dog",
                onPress: () => {
                  if (imgURL && dogName) {
                    addDog({ url: imgURL, name: dogName });
                    setDogName("");
                    fetchDog(setImgURL);
                  }
                },
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

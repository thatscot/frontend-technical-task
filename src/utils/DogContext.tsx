import React, { createContext, useState, useContext } from "react";

type Dog = {
  name: string;
  url: string;
};

type DogContextType = {
  dogs: Array<Dog>;
  addDog: Function;
  removeDog: Function;
};

const DogContext = createContext<DogContextType>({
  dogs: [],
  addDog: (dog: Dog) => {},
  removeDog: (index: number) => {},
});

const DogProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [dogs, setDogs] = useState<Array<Dog>>([]);

  const addDog = (dog: Dog) => {
    setDogs((prevState) => [...prevState, dog]);
  };

  const removeDog = (index: number) => {
    setDogs((prevState) => {
      const stateCopy = [...prevState];
      stateCopy.splice(index, 1);
      return stateCopy;
    });
  };

  return (
    <DogContext.Provider value={{ dogs, addDog, removeDog }}>
      {children}
    </DogContext.Provider>
  );
};

const useDogContext = () => useContext(DogContext);

export { DogProvider, useDogContext };

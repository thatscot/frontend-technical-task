import React, { createContext, useState, useContext } from "react";

interface Dog {
  name: string;
  url: string;
}

interface DogContext {
  dogs: Array<Dog>;
  addDog: Function;
  removeDog: Function;
}

const DogContext = createContext<DogContext>({
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

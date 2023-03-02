# Techincal task

## How to use

- Install packages with `yarn` or `npm install`.
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project on an Android or iOS simulator.

## Taks summary

Create a simple app with two screens using **only the libraries provided in package.json**. The user should be able to navigate between the two screens using a navigation bar at the top. The screens are described below:

- **Screen 1.** Contains a text input and a button. On pressing the button the content of the input is stored somewhere that is accessible to any other screen/component in the app. Make your state management solution scalable.
- **Screen 2.** Contains a button The button will show a sheet that slides from the bottom of the screen and overlaps the content. This sheet will show the value stored on **Screen 1** or a default message in case it is empty along with a button that will allow the user to close the sheet.

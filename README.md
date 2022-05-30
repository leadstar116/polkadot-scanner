# Polkadot Scanner

This project is a simple Polkadot Blockchain Scanner web app that is able to scan & display events for the Polkadot Network.

## Used Stacks:

- React
- Formik
- Material UI
- Polkadot.js

## Main Functionalities of App

1. Display a form with the following fields

- Start block (required field)
- End block (required field, default to the latest block number)
- Endpoint (required field, default to wss://rpc.polkadot.io)
- “Scan” button

2. It has a basic error validation on all of the fields and display appropriate error messages

3. After a user clicks the Scan button, start fetching events from the given endpoint, and display them in a result table

4. Display a progress bar during the scanning process

5. The results table should have the following details of the events

- block number
- event name
- event index
- event arguments

6. Users are able to sort events on various columns

7. Users are able to filter events by name

## Screenshots

<img src='https://tscscreencastlive.blob.core.windows.net/uploads/g0003016cPfgYv4HUS8VkgrTtQcTN/2022-05-31_00-31-04.png?sv=2019-07-07&sr=b&sig=Ic%2FUwLLuksHjwGtgT71K51Lvro8BgD3p3KtjsTL3M1k%3D&st=2022-05-30T14%3A26%3A37Z&se=2022-05-31T14%3A31%3A37Z&sp=r' />



# Project Run

Using node version 16 and `npm` for installing the dependencies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

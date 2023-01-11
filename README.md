# GitHub Query App

[React](https://reactjs.org/) based single page application that leverages the [GitHub REST API](https://docs.github.com/en/rest).

**Demo:**  
[https://ajduncombe.github.io/github-query-app/](https://ajduncombe.github.io/github-query-app/)

## Application overview

This is a simple app that takes a username input. If the input is a valid GitHub username, then that user's name (if available) and number of public repositories are displayed. A warning message is returned if the username is invalid.

This project was undertaken to aid in learning React and act as a demo for the following concepts:

- Compositional React component patterns
- React project directory structure
- Leveraging the [MUI](https://mui.com/) component library

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get this project up and running on your local system you'll need both [npm](https://www.npmjs.com) and [node.js](https://nodejs.org/en/) installed on your development system.

### Installing

To install all dependencies required for the project, clone or download the source `cd` into the project root and from your terminal run:

```bash
npm install
```

### Local development / testing

The project uses [Create React App](https://create-react-app.dev/), which includes a local development server `cd` into the project root and run the following command from the terminal:

```bash
npm start
```

Create React App will build a development version of the app. The localhost / local network preview address will be printed to the console.

## Deployment

To build a production copy for deployment `cd` into the project root and run the following command from your terminal:

```bash
npm run build
```

## Built with

- [React](https://reactjs.org/) &ndash; JavaScript UI development library
- [MUI](https://mui.com/) &ndash; Material UI component library
- [Cypress](https://www.cypress.io/) &ndash; JavaScript testing framework

## Author

Built by Andrew Duncombe &ndash; [ajduncombe](https://github.com/ajduncombe)

## License

This project is licensed under the MIT License &ndash; see the [LICENSE.txt](https://github.com/ajduncombe/github-query-app/blob/main/LICENSE.txt) file for details.

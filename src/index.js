import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./config";

const { s3, apiGateway, cognito } = config;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: cognito.REGION,
    userPoolId: cognito.USER_POOL_ID,
    identityPoolId: cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: cognito.APP_CLIENT_ID
  },
  Storage: {
    region: s3.REGION,
    bucket: s3.BUCKET,
    identityPoolId: cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: apiGateway.URL,
        region: apiGateway.REGION
      }
    ]
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

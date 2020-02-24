import config from "./amplify/config";

const { dev, prod } = config;

// Default to dev if not set
const stage = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_0uUHYyI9hiKCVRS6x2nzdL1i",
  ...stage
};

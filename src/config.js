import config from "./amplify/config";
import stripe from "./stripe/";

const { dev, prod } = config;

let STRIPE_KEY = {};

if (process.env.REACT_APP_STAGE === "prod") {
  STRIPE_KEY = stripe[process.env.REACT_APP_STAGE].STRIPE_KEY;
} else {
  STRIPE_KEY = stripe.dev.STRIPE_KEY;
}

// Default to dev if not set
const stage = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY,
  ...stage
};

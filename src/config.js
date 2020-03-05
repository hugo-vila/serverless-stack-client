const config = {
  dev: {
    cognito: {
      REGION: process.env.REACT_APP_DEV_COGNITO_REGION,
      USER_POOL_ID: process.env.REACT_APP_DEV_COGNITO_USER_POOL_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_DEV_COGNITO_IDENTITY_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_DEV_COGNITO_APP_CLIENT_ID
    },
    s3: {
      REGION: process.env.REACT_APP_DEV_S3_REGION,
      BUCKET: process.env.REACT_APP_DEV_S3_BUCKET
    },
    apiGateway: {
      REGION: process.env.REACT_APP_DEV_APIGATEWAY_REGION,
      URL: process.env.REACT_APP_DEV_APIGATEWAY_URL
    }
  },
  prod: {
    cognito: {
      REGION: process.env.REACT_APP_PROD_COGNITO_REGION,
      USER_POOL_ID: process.env.REACT_APP_PROD_COGNITO_USER_POOL_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_PROD_COGNITO_IDENTITY_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_PROD_COGNITO_APP_CLIENT_ID
    },
    s3: {
      REGION: process.env.REACT_APP_PROD_S3_REGION,
      BUCKET: process.env.REACT_APP_PROD_S3_BUCKET
    },
    apiGateway: {
      REGION: process.env.REACT_APP_PROD_APIGATEWAY_REGION,
      URL: process.env.REACT_APP_PROD_APIGATEWAY_URL
    }
  }
};
const { dev, prod } = config;
const stripe = {
  dev: { STRIPE_KEY: process.env.REACT_APP_DEV_STRIPE_KEY },
  prod: { STRIPE_KEY: process.env.REACT_APP_PROD_STRIPE_KEY }
};

let STRIPE_KEY = {};

if (process.env.REACT_APP_STAGE === "prod") {
  STRIPE_KEY = stripe[process.env.REACT_APP_STAGE].STRIPE_KEY;
} else {
  STRIPE_KEY = stripe.dev.STRIPE_KEY;
}

const stage = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY,
  ...stage
};

import config from "./amplify/config";

const { s3, apiGateway, cognito } = config;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_0uUHYyI9hiKCVRS6x2nzdL1i",
  s3,
  apiGateway,
  cognito
};

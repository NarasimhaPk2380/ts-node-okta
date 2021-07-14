import config from "../config";
import { Service } from "typedi";
import request from "request-promise";
import logger from "../loaders/logger";
import btoa from "btoa";

@Service()
export class OktaClientService {
  async getToken() {
    const token = btoa(
      `${config.oktaConfig.clientId}:${config.oktaConfig.clientSecret}`
    );
    return await request({
      uri: `${config.oktaConfig.issuer}/v1/token`,
      json: true,
      method: "POST",
      headers: {
        authorization: `Basic ${token}`,
      },
      form: {
        grant_type: "client_credentials",
        scope: `${config.oktaConfig.scope}`,
      },
    });
  }
}

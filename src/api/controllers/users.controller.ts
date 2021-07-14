import { NextFunction, Request, Response } from "express";
import logger from "../../loaders/logger";
import { OktaClientService } from "../../services/okta-client.service";

export class UsersController {
  oktaClientService: OktaClientService;
  constructor() {
    this.oktaClientService = new OktaClientService();
  }
  async getAccessToken(req: Request, res: Response, next: NextFunction) {
    try {
      logger.debug("getAccessToken Api invoked");
      const tokenData = await this.oktaClientService.getToken();
      logger.debug("getAccessToken is given");
      return res.json(tokenData).status(200);
    } catch (e) {
      logger.error(e.message);
      next(e.message);
    }
  }
}

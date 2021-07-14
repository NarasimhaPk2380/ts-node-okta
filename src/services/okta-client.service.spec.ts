import { OktaClientService } from "./okta-client.service";
describe("OktaClientService", () => {
  let oktaClientService: OktaClientService;

  beforeEach(() => {
    oktaClientService = new OktaClientService();
  });

  it("Should create", () => {
    expect(oktaClientService).toBeTruthy();
  });

  it("Should check if it returns access token", async () => {
    const tokenData = await oktaClientService.getToken();
    expect(tokenData?.access_token).toBeDefined();
  });
});

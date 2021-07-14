import { Request } from "express";
import {
  createMocks,
  mockNext,
  mockResponse,
} from "../../helpers/tests/mocking-funtions";
import { OktaClientService } from "../../services/okta-client.service";
import { UsersController } from "./users.controller";
const dummyTokenData = {
  token_type: "Bearer",
  expires_in: 3600,
  access_token:
    "eyJraWQiOiJIekN2MWhPNUZwNzRqcWJPcEpTd0RldXJqdnI0aDM0bWpWNzNXeVI1dUFFIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjRrQ0EyYnRlWkxUcDFYVnJyZlFnS3dta1RFZFN0ODZvS1JQM3liNXVHU2MiLCJpc3MiOiJodHRwczovL2Rldi05MzE3NzgyMy5va3RhLmNvbS9vYXV0aDIvYXVzMThkaHU5dmZvRThueWU1ZDciLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjI2MjQ5OTAwLCJleHAiOjE2MjYyNTM1MDAsImNpZCI6IjBvYTE1YnJ3bndkZ2t4RG9XNWQ3Iiwic2NwIjpbImF1dGhvcmlzZSJdLCJzdWIiOiIwb2ExNWJyd253ZGdreERvVzVkNyJ9.GnSWl_OWid7GTlnRJxAWug3Fx73i8J7xIKhY2-1ZpU1InBGEyU4keNICjarcQ3BaTqWmAvsC2Qc3Vr4IVC60QJZzIqvVltX01ZTf6UShyLzf_F0mJ8LpOZj7wnCI45Hgo4OQYjCk_dGlMIiNpwAKIJE_I6NsNPxtaeBsrrNh53Cy61MeW9w0loyCFS_CjVaLhHcdPc3gKoQrxGjfM4k9WQFee0PQSrjKe39jR5NDlUX28nywNRPpfQotbel-mWeNOuJbn4vaxe3TqlCLcMP7uwpw3hDwbHUWFn8fzdDRaPBdItOXHAoMASpG1s-QPhwZGNFjJD8guZHlX41XxybmLA",
  scope: "authorise",
};
const availableMethodsInOktaClientSrvc: any = {
  getToken: dummyTokenData,
};

describe("UsersController", () => {
  let usersController: UsersController;
  const OktaClientServiceMock = <jest.Mock<OktaClientService>>OktaClientService;
  const instanceOfOktaClientServiceMock = new OktaClientServiceMock();
  createMocks(
    instanceOfOktaClientServiceMock,
    availableMethodsInOktaClientSrvc,
    false
  );

  beforeEach(() => {
    usersController = new UsersController();
    usersController.oktaClientService = instanceOfOktaClientServiceMock;
  });

  it("Should create", () => {
    expect(usersController).toBeTruthy();
  });
  it("Should get the token data", async () => {
    const res = mockResponse();
    await usersController.getAccessToken({} as Request, res, mockNext);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(dummyTokenData);
  });
});

describe("UsersController for failure case", () => {
  let usersController: UsersController;
  const OktaClientServiceMock = <jest.Mock<OktaClientService>>OktaClientService;
  const instanceOfOktaClientServiceMock = new OktaClientServiceMock();
  createMocks(
    instanceOfOktaClientServiceMock,
    availableMethodsInOktaClientSrvc,
    true
  );

  beforeEach(() => {
    usersController = new UsersController();
    usersController.oktaClientService = instanceOfOktaClientServiceMock;
  });

  it("Should get failed the token data", async () => {
    const res = mockResponse();
    await usersController.getAccessToken({} as Request, res, mockNext);
    expect(mockNext).toHaveBeenCalledWith("Failed");
  });
});

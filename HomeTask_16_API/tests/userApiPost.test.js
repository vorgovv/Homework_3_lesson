const axios = require("axios");
const validator = require("jsonschema");
const usersApiSchemaPutAndPost = require("../data/userApiSchemaPostAndPut.json");

describe("User POST api test", function () {
  let response;
  beforeAll(async () => {
    response = await axios.post(
      "https://fakerestapi.azurewebsites.net/api/v1/Users",
      {
        id: 0,
        userName: "string",
        password: "string",
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
      }
    );
  });
  test("should return status code 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("should be valid response json schema", async () => {
    const result = await validator.validate(
      response.data,
      usersApiSchemaPutAndPost
    );
    await expect(result.valid).toEqual(true);
  });
});

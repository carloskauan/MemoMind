const request =  require("supertest");
const app = require("../src/index");

describe("Servidor", ()=>{
  let response;
  beforeEach(async()=>{
    response = await request(app).get("/");
  });
  it("Testando atividade do servidor",()=>{
    expect(response.statusCode).toEqual(200);
  });
});
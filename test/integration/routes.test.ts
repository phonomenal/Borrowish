import chai from "chai";
import app from "../../server/server";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Hello API request", () => {
  it("show return with a response on call", () => {
    return chai
      .request(app)
      .get("/api/hello")
      .then((res) => {
        expect(res.status).to.eql(200);
        expect(res.body.express).to.contain("We are automated now!");
      });
  });
});

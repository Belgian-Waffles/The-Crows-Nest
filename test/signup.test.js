var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
describe("The-Crows-Nest registration", function() {
  it("If form data is valid?", function(done) {
    return nightmare
      .goto("http://localhost:5000/signup")
      .type("#txtUsername", "test")
      .type("#txtPassword", "test")
      .type("#txtEmail", "test@test.com")
      .type("#txtState", "CA")
      .type("#txtCity", "City")
      .screenshot("./test/screenshot/signup.png")
      .click("#user-submit-btn")
      .end()
      .then(function(result) {
          console.log("You are registered");
        expect(result).toBeDefined();
        done();
      })
      .catch(function(err) {
          console.log("Something is wrong. try it again!!");
        console.log(err);
        done();
      });
  }, 30000);
});

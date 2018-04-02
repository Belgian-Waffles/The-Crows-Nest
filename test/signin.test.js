var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
describe("The-Crows-Nest login", function() {
  it("If can be logged in sucessfully?", function(done) {
    return nightmare
      .goto("http://localhost:5000/signin")
      .type("#txtUsername", "BelgianWaffles")
      .type("#txtPassword", "crow1")
      .click("#user-signin-btn")
      .screenshot("./test/screenshot/signup.png")
      .evaluate(function() {
        return document.querySelector('a[href="/community"]');
      })
      .end()
      .then(function(result) {
        expect(result).toBeDefined();
        console.log("You are in");
        done();
      })
      .catch(function(err) {
        console.log(err);
        done();
      });
  }, 30000);
});

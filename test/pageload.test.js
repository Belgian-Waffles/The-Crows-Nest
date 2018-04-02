var Nightmare=require("nightmare");
var nightmare = Nightmare({ show: true });
describe("Accessing the Domain",function(){
    it("See the domain is alive",function(done){
        return nightmare
        .goto("http://localhost:5000")
        .then(function(gotoStatus){
            if (gotoStatus.code !== 200) {
                return console.log("Url error. NOT OK!");
              }
            console.log("The site is up and running!")
            done();
        })
        .catch(function(error){
            console.log("Something is Wrong!!!")
            done();
        })
    },30000);
})
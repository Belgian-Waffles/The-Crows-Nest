var Weather = function (state, city) {
    this.State = state;
    this.City = city;
    this.isStateValidated = validateStateAbbr(this.State);
    this.getWeather = function (cb) {
        if (!this.isStateValidated) {
           return false;
       }
       // uncomment in production it's in .env 
        //var queryUrl="http://api.wunderground.com/api/"+process.env.WEATHER_API_KEY+"/forecast/q/"+this.State+"/"+concatenateCity(this.City)+".json";
        var queryUrl = "http://api.wunderground.com/api/" + "f3076c2b38004fb8" + "/forecast/q/" + this.State + "/" + concatenateCity(this.City) + ".json";
        $.ajax({
            type: "GET",
            url: queryUrl,
            async: false,
            dataType: "JSON"
        }).done(function (response) {
            var data = [];
            var forecastday = response.forecast.simpleforecast.forecastday;
            for (var i = 0; i < forecastday.length; i++) {
                var obj = {};
                obj.day = forecastday[i].date.weekday + ", " + forecastday[i].date.monthname + " " + forecastday[i].date.day;
                obj.title = forecastday[i].icon;
                obj.imageUrl = forecastday[i].icon_url;
                obj.celsiusHigh = forecastday[i].high.celsius;
                obj.fahrenheitHigh = forecastday[i].high.fahrenheit;
                obj.celsiusLow = forecastday[i].low.celsius;
                obj.fahrenheitLow = forecastday[i].low.fahrenheit;
                data.push(obj);
            }
            cb(data);
        });
    };
}
function validateStateAbbr(state) {
    var stateList = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "GU", "PR", "VI"];
    if (stateList.indexOf(state.toUpperCase()) > -1) {
        return true;
    }
    else {
        return false;
    }
}
function concatenateCity(city) {
    return city.trim().replace(" ", "_");
}
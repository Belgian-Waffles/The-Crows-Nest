// Weather API call 
$(document).ready(function () {
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

var weatherData = new Weather("CA", "Santa Ana");
var y = weatherData.getWeather(function (res) {
    $("#forecastday").append("<h1>" + weatherData.State + ", " + weatherData.City + "</h1>")
    console.log(res);
    for (var i = 0; i < res.length; i++) {
        var day = res[i].day;
        var image = res[i].imageUrl;
        var weatherCondition = res[i].title;
        var fahrenheitHigh = res[i].fahrenheitHigh;
        var fahrenheitLow = res[i].fahrenheitLow;
        var celsiusHigh = res[i].celsiusHigh;
        var celsiusLow = res[i].celsiusLow;

        console.log(fahrenheitLow);
        console.log(celsiusLow);

        var newWeatherDiv = $("<div>").addClass("weather");

        // Create new day div
        var newDayDiv = $("<div>").addClass("day");
        newDayDiv.text(day);
        $(newWeatherDiv).append(newDayDiv);

        // Creating new image div
        var newImage = $("<img>");
        newImage.attr('src', image);
        $(newWeatherDiv).append(newImage);

        // Create new weather condition div
        var newConditionDiv = $("<div>").addClass("condition");
        newConditionDiv.text(weatherCondition);
        $(newWeatherDiv).append(newConditionDiv);

        // Create new temperature high div
        var newTempHighDiv = $("<div>").addClass("temp-high");
        var fHigh = $("<span>" + fahrenheitHigh + " F</span>").addClass("f-high");
        console.log(fHigh);
        var cHigh = $("<span>" + celsiusHigh + " C</span>").addClass("c-high");
        newTempHighDiv.append(fHigh);
        newTempHighDiv.append(" ");
        newTempHighDiv.append(cHigh)
        $(newWeatherDiv).append(newTempHighDiv);

        // Create new temperature low div
        var newTempLowDiv = $("<div>").addClass("temp-low");
        var fLow = $("<span>" + fahrenheitLow + " F</span>").addClass("f-low");
        var cLow = $("<span>" + celsiusLow + " C</span>").addClass("c-low");
        newTempLowDiv.append(fLow);
        newTempLowDiv.append(" ");
        newTempLowDiv.append(cLow);
        $(newWeatherDiv).append(newTempLowDiv);

        // Append all day to our weather section
        $("#weather").append(newWeatherDiv);
    }
});
})
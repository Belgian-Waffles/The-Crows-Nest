var API_KEY="7fe6a86c133e4266a390283e6305691a";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API_KEY);

newsapi.v2.topHeadlines({
    country: 'us'
}).then(function(res){
    console.log(JSON.stringify(res, null, 2));
});
const request = require('request')
const news = function (title, description,urlToImage, callback) {
    const url = "https://newsapi.org/v2/everything?apiKey=3b1814a8b32b4aae94eb42e221df491e" + title +" "+ description+" "+ urlToImage
    request ({url,json:true}, function(error, response){
        if (error) {
            callback('no internet connection', undefined)
        } else if (response.body.error) {
            callback('not found', undefined)
        } else {
            callback(undefined,response.body.articles.urlToImage + " "+ response.body.articles.title + " " + response.body.articles.description)
        }
    })
}
module.exports = news
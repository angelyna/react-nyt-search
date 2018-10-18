const axios   = require('axios'),
      qs      = require('querystring');


let helpers = {

  _nytGet: function(q, begin_date, end_date) {

    let data = qs.stringify ({
        apikey: "b9f91d369ff59547cd47b931d8cbc56b:0:74623931", 
        q: q, 
        sort: "newest", 
        hl: true, 
        fl: "web_url,snippet,headline,byline,pub_date", 
        begin_date:  begin_date, 
        end_date:    end_date
      });
      return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${data}`, {
        headers: {
          "Content-Type": "application/jsonp"
        }
      });
  },
  _mongoPost: function(postArticle) {
    let data = qs.stringify(postArticle);
    return axios.post(`/api/saved?${data}`);
  },
  _mongoGet: function() {
    return axios.get('/api/saved');
  }, 
  _mongoDelete: function(deleteArticle) {
    let data = qs.stringify(deleteArticle);
    console.log(data);
    return axios.delete(`/api/saved?${data}`);
  }
}
module.exports = helpers;

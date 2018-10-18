const express     = require('express'), 
      bodyParser  = require('body-parser'), 
      logger      = require('morgan'),
      mongoose    = require('mongoose'),
      axios       = require('axios'), 
      PORT        = process.env.PORT || 1610, 
      app         = express(),
      Article     = require('./models/Article'),
      Promise     = require('bluebird');

mongoose.Promise  = Promise;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


// MongoDB configuration 
mongoose.connect( // Connect to the Mongo DB
  process.env.MONGODB_URI ||  "mongodb://heroku_lclqr68x:ikm5vq90br26blrq7ujohccb73@ds011291.mlab.com:11291/heroku_lclqr68x"
);

var db = mongoose.connection;


db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Main "/" Route. This will redirect the user to the rendered React application
app.get('/', function(req, res) {
  res.render('/index.html');
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered

//show all saved articles
app.get('/api/saved', function(req, res) {
  let article = new Article(req.query);
  article.getArticles(req, res);
});

//save an article
app.post('/api/saved', function(req, res) {
  let article = new Article(req.query);
  article.saveArticle(req, res);
});

//delete a saved article
app.delete('/api/saved', function(req, res) {
  let article = new Article(req.query);
  article.deleteArticle(req, res);
});

app.listen(PORT, function() {
  console.log("App listen on PORT: " + PORT);
});

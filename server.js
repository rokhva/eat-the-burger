let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let handleBars = require("express-handlebars");
let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(methodOverride("_method"));

app.engine(
  "handlebars",
  handleBars({
    defaultLayout: 'main'
  })
);
app.set("view engine", "handlebars");

let routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

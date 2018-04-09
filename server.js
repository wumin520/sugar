var express = require("express");
var app = express();

app.use(express.static("homepage")).listen(8080);

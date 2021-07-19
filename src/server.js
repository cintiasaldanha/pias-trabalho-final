const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const server = http.createServer(app);

//Inicia servidor
server.listen(process.env.PORT || 8090, () => {
  console.log("Servidor conectador na porta: " + server.address().port);
});

/*
var server = app.listen(process.env.PORT ||3001, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
*/
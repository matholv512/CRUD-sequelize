const express = require('express');
const http = require('http');
const routesFilme = require('./api/routes/filmeRoutes.js');
const routesElenco = require('./api/routes/elencoRoutes.js');

require('./database/indexDB.js');

const app = express();

app.set('porta', 7777);
app.set('url','http//localhost:');

app.use(express.json());
app.use(routesFilme);
app.use(routesElenco);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
})
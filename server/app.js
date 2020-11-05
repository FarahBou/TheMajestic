const path =require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const mongoConnect = require('./util/mongodb').mongoConnect;

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
//app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const listRoutes = require('./routes/shop');
const eventsRoutes = require('./routes/planning');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: false}));

app.use( adminRoutes.routes);
app.use( eventsRoutes.routes);
app.use(listRoutes);

//app.use(notFoundController.get404);

mongoConnect(() => {
    app.listen(3000);
});
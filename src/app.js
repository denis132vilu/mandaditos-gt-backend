'use strict';

// MODULES
const express   = require('express');
const app       = express();
const cors      = require('cors');

// MIDDLEWARES
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// // HEADERS CONTROL
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Somos la mera verga</title>
            </head>
            <body style="padding-top: 100px; margin: 0; background: rgb(34,193,195); background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(157,199,108,1) 51%, rgba(253,187,45,1) 100%);">
                <div style="text-align: center; color: white;">
                    <h1 style="font-size: 56px;">Mandaditos GT</h1>
                    <p style="font-size: 22px;">Aquí estamos, vivitos y coleando para toda Guate.</p>
                </div>
            </body>
        </html>
    `);
});

// CONTROLLERS


// ROUTES


// EXPORT APP
module.exports = app;
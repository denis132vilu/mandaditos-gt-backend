'use strict';

const mongoose  = require('mongoose');
const app       = require('./app');
const {
    dbConfig: { user, dbName, password }
}               = require('./config/config');


app.set(
    'mongoDbUrlDev',
    `mongodb://localhost:27017/${dbName}`
);
app.set(
    'mongoDbUrl',
    `mongodb+srv://${user}:${password}@mandaditos-gt.wexu6.mongodb.net/${dbName}?retryWrites=true&w=majority`
);
app.set(
    'port',
    process.env.PORT || 3000
);
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};


mongoose.connect(
    app.get('mongoDbUrlDev'),
    // app.get('mongoDbUrl'),
    connectionOptions
).then((res) => {

    console.log('> Connected to DB...');

    app.listen(app.get('port'), () => {
        console.log(`El servidor está corriendo en el puerto: ${app.get('port')}`);
    });

}).catch(err => console.log(`> Error on DB: ${err.message}`));
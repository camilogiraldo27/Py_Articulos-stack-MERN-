'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 4040;

// mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true})
        .then(()=> {
            console.log('La conexion a la base de datos se ha realizado bien !!!!!');

            // Crear el servisor y ponerme a escuchar peticiones HTTP

            app.listen(port, () => {
                console.log(`Servidor corriendo en http://localhost: ${port}`);
            });
        });


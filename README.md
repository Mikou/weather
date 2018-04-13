installation:
=============

    npm install


API key in development mode:
============================

add a file "dev.js" in config/ containing the key for openweathermap.
the file should contain the following:

    module.exports = {
      openweathermap: '<api_key>'
    }

build step:
===========

    npm run bundle

run:
====

    npm start

accessing the application:
==========================

Browse to http://localhost:8080/

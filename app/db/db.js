var mongoose = require('mongoose');

module.exports = {
    connect: function () {
        mongoose.connect('mongodb://localhost/freetravel-db');
    },
    close: function () {
        mongoose.connection.close();
    }
}

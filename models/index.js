let mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// use native JS promise library instead of Mongoose's deprecated one
mongoose.Promise = global.Promise;

Schema = mongoose.Schema;

let Mushroom = require('./mushroomschema');

exports.Mushroom = Mushroom;

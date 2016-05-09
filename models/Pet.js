var mongoose = require('mongoose');
var PetSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'lostorfound_collection'
});

mongoose.model('Pet', PetSchema);
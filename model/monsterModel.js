var mongoose = require('mongoose');

var monsterSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    weapon: { type: String }

})

module.exports = mongoose.model("Monster", monsterSchema);
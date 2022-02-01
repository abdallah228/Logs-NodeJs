const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const { serializeInteger } = require('whatwg-url');

const AdminLog= mongoose.Schema({
    method: String,
    url: String,
    user_id:String,
    body_data:Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Log', AdminLog);
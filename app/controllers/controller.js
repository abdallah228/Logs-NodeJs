const AdminLog = require('../models/models.js');

// Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request
    // if(!req.body.description) {
    //     return res.status(400).send({
    //         message: "Todo description can not be empty"
    //     });
    // }

    // Create a Todo
    const log = new AdminLog({
        method: req.body.method , 
        url: req.body.url,
        user_id : req.body.user_id,
        body_data: req.body.body_data,
    });

    // Save Todo in the database
    log.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the log."
        });
    });
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
    AdminLog.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving log."
        });
    });
};

// Find a single todo with a id
exports.findOne = (req, res) => {
    log.findById(req.params.id)
    .then(log => {
        if(!log) {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.id
            });            
        }
        res.send(log);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving todo with id " + req.params.id
        });
    });
};


module.exports = (app) => {
    const logs = require('../controllers/controller.js');

    // Create a new todo
    app.post('/adminLogs', logs.create);

    // Retrieve all logs
    app.get('/adminLogs', logs.findAll);

    // Retrieve a single todo by id
    app.get('/adminLogs/:id', logs.findOne);

 
}

const mongoose = require('mongoose');

const connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect('mongodb://localhost/todo-mern', connectionParams);
        console.log('Connected to Db.')
    } catch (error) {
        console.log('Failed to connect to Db.', error);
    }
};

module.exports = {
    connection,
};

const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    taskTitle: { type: String, required: true },
    taskDescription: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('task', taskSchema);

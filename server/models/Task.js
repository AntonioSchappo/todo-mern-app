const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    taskTitle: { type: String, required: true, minlength: 3 },
    taskDescription: { type: String, required: true, minlength: 3 },
    status: { 
        type: String,
        enum: ['pendente', 'em andamento', 'pronto'],
        default: 'pendente',
        lowercase: true },
    dateCreated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('task', taskSchema);

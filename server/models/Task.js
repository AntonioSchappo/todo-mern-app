const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    taskTitle: { type: String, required: true },
    taskDescription: { type: String, required: true },
    status: { type: String, enum: ['pendente', 'em andamento', 'pronto'], default: 'pendente' },
    dateCreated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('task', taskSchema);

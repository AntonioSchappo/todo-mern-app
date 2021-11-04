const Task = require('../models/Task');
const express = require('express');

const getAll = async (_req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const create = async (req, res) => {
    const { error, task } = await new Task(req.body).save();
    if (error) return res.status(400).send(error);
    return res.status(201).send(task);
};

const update = async (req, res) => {
    const { error, task } = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (error) return res.status(400).send(error);
    return res.status(200).send(task);
};

const remove = async (req, res) => {
    const { error, task } = await Task.findByIdAndDelete(req.params.id)
    if (error) return res.status(400).send(error);
    return res.status(200).send(task);
}

module.exports = {
    getAll,
    create,
    update,
    remove,
}
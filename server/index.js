const { connection } = require('./models/db');
const Task = require('./controllers/tasks');
const cors = require('cors');
const express = require('express');

const app = express();
connection();
app.use(express.json());
app.use(cors);

app.get('/tasks', Task.getAll);
app.post('/task', Task.create);
app.put('/tasks:id', Taks.update);
app.delete('/tasks:id', Task.remove);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Live on port ${port}`));

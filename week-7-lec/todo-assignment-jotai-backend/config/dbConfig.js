const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const TodoModel = new mongoose.model('todo-sample', TodoSchema);

module.exports = {
    TodoModel
}
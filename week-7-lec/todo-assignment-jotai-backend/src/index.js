require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { TodoModel } = require("../config/dbConfig");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const allTodos = await TodoModel.find();
    res.status(200).json({
        allTodos,
    });
});

app.get('/filteredTodos', async (req, res) => {
    const { searchText } = req.query;
    try {
        const filteredTodos = await TodoModel.find({
            $or: [
                { title: { $regex: searchText, $options: 'i' } },
                { description: { $regex: searchText, $options: 'i' } }
            ]
        });

        res.status(200).json({
            filteredTodos,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong!", error: error.message
        });
    }
});

app.post('/createTodo', async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = new TodoModel({
            title, description
        });
    
        const saveTodo = await newTodo.save();
        res.status(200).json({
            msg: "Todo created",
            todoId: saveTodo._id,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong!", error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`);
});
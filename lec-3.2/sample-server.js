const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const todos = [{
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  }, {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  }, {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  
  }, {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  }, {
  
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
  }];
  
  app.get("/todos", (req, res) => {
    const randomTodos = [];
    for (let i = 0; i < 5; i++) {
      if (Math.random() > 0.5) {
        randomTodos.push(todos[i]);
      }
    }
    res.json({
      todos: randomTodos,
    })
  });

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
})

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sumToSend = a + b;
    res.send(sumToSend.toString());
});

app.get("/interest", (req, res) => {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        total: total,
        interest: interest,
    });
});

app.listen(3001, () => {
    console.log("Server running at 3001");
});
const express = require("express")

const Todo = require("../model/todoModel");

const router = express.Router();


// GET ALL THE TODOS

router.get('/', (req, res) => {
    
});

// GET A TODO by ID

router.get('/:id', (req, res) => {
    
});

// POST TODO

router.post('/', async (req, res) => {
    try {
        // Create a new todo
        const newTodo = new Todo(req.body);
        // Save the todo to the database
        await newTodo.save();
    
        res.status(201).json(newTodo);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

// POST ALL TODO

router.post('/all', async (req, res) => {
    try {
        // Create new todos
        const newTodo = await Todo.insertMany(req.body);
        // Save the todo List to the database
    
        res.status(201).json(newTodo);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
});

// PUT TODO

router.put('/:id', async (req, res) => {
    try {
        // Create new todos //updateMany, updateOne, findByIdAndUpdate
        const newTodo = await Todo.updateOne({_id: req.params.id}, {
            $set:{
                title:"new Test",
                description: "Test Dis"
            }
        });
        // Save the todo List to the database
    
        res.status(201).json(newTodo);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

    
});

// PUT TODO

router.delete('/:id', (req, res) => {
    
});


module.exports = router;
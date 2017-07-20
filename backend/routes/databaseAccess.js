const express = require('express');
const router = express.Router();

const TodoItem = require('../models/ToDoItem');

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
     taskText: req.body.taskText
   });

   testTodo.save()
     .then(response => {
       res.send(response);
     })
     .catch(error => {
       res.send(error);
     })
});

router.post('/toggle', (req, res) => {
  TodoItem.findById(req.body.id)
    .then(function(item) {
      item.update({completed: !item.completed});
      res.send(item);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/remove', (req, res) => {
  TodoItem.findById(req.body.id)
    .then(function(item) {
      item.remove();
      res.send(item);
    })
    .catch(error => {
      res.send(error);
    })
})

router.get('/all', (req, res) => {
  TodoItem.find()
    .then(function(items) {
      res.send(items);
    })
    .catch(error => {
      res.send(error);
    })
});

module.exports = router;

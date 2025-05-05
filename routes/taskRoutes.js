const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Create a new task (POST)
router.post('/', createTask);

// Get all tasks (GET)
router.get('/', getAllTasks);

// Get a specific task by ID (GET)
router.get('/:id', getTaskById);

// Update a task by ID (PUT)
router.put('/:id', updateTask);

// Delete a task by ID (DELETE)
router.delete('/:id', deleteTask);

module.exports = router;

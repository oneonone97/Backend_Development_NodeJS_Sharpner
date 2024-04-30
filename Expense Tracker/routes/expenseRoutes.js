// routes/expenseRoutes.js
const express = require('express');
const router = express.Router();
const { Expense } = require('../models/index');

// Create expense
router.post('/', async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await Expense.update(req.body, {
        where: { id }
      });
      if (updated) {
        const updatedExpense = await Expense.findOne({ where: { id } });
        return res.status(200).json(updatedExpense);
      }
      throw new Error('Expense not found');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Expense.destroy({
        where: { id }
      });
      if (deleted) {
        return res.status(204).send();
      }
      throw new Error('Expense not found');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;

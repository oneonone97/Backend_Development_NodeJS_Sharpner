// script.js
// Function to fetch and display expenses
async function fetchExpenses() {
    try {
      const response = await axios.get('http://localhost:3000/api/expenses');
      const expenses = response.data;
      const expenseList = document.getElementById('expense-list');
      expenseList.innerHTML = expenses.map(expense => `
        <li>
          <div>${expense.description} - $${expense.amount} - ${new Date(expense.date).toLocaleDateString()}</div>
          <button onclick="editExpense(${expense.id})">Edit</button>
          <button onclick="deleteExpense(${expense.id})">Delete</button>
        </li>
      `).join('');
    } catch (error) {
      console.error(error);
    }
  }
  
  // Function to handle edit expense
  async function editExpense(id) {
    const description = prompt('Enter new description:');
    const amount = parseFloat(prompt('Enter new amount:'));
    const date = prompt('Enter new date (YYYY-MM-DD):');
    
    if (description && !isNaN(amount) && date) {
      try {
        await axios.put(`http://localhost:3000/api/expenses/${id}`, { description, amount, date });
        fetchExpenses();
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  // Function to handle delete expense
  async function deleteExpense(id) {
    const confirmDelete = confirm('Are you sure you want to delete this expense?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/expenses/${id}`);
        fetchExpenses();
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  // Function to add new expense
  const expenseForm = document.getElementById('expense-form');
  expenseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
  
    try {
      await axios.post('http://localhost:3000/api/expenses', { description, amount, date });
      fetchExpenses();
      expenseForm.reset();
    } catch (error) {
      console.error(error);
    }
  });
  
  // Initial fetch of expenses
  fetchExpenses();
  
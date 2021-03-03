import axios from "axios";

export default {
  // Gets all expenses
  getExpenses: function() {
    return axios.get("/api/expenses");
  },
  // Deletes the expense with the given id
  deleteExpense: function(id) {
    return axios.delete("/api/expenses/" + id);
  },
  // Saves a new expense to the database
  addExpense: function(expenseData) {
    console.log(expenseData);
    return axios.post("/api/expenses/new", expenseData);
  },
  // EVENTS
  getEvents: () => {
    return axios.get('/api/events');
  },
  saveEvent: data => {
    return axios.post('/api/events', data);
  },
  deleteEvent: id => {
    return axios.delete('/api/events/' + id);
  }
};

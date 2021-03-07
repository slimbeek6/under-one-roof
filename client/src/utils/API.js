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


  // Gets all chores
  getChores: function() {
    return axios.get("/api/chores");
  },
  // Deletes the chore with the given id
  removeChore: function(id) {
    return axios.delete("/api/chores/" + id);
  },
  // Saves a new chore
  addChore: function(newChore) {
    return axios.post("/api/chores/new", newChore);
  },
  // Update a chore with the given id
  updateChore: function(id) {
    return axios.put("/api/chores/update/" + id);
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
  },

  // AUTH
  signup: (newUser) => {
    return axios.post('/api/auth/signup', newUser);
  },
  signin: (user) => {
    return axios.post('/api/auth/signin', user);
  }

};

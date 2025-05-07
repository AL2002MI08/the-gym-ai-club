import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      title: "Groceries",
      amount: 45.75,
      date: "2025-04-15",
      category: "Food",
    },
    {
      id: uuidv4(),
      title: "Gas",
      amount: 30.0,
      date: "2025-04-16",
      category: "Transport",
    },
    {
      id: uuidv4(),
      title: "Restaurant",
      amount: 65.2,
      date: "2025-04-18",
      category: "Entertainment",
    },
  ]);

  const addExpense = (expense) => {
    const newExpense = {
      id: uuidv4(),
      ...expense,
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-600">
        Expense Tracker
      </h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;

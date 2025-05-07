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
  const [filter, setFilter] = useState({ startDate: "", endDate: "" });

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

  const handleFilterChange = (field, value) => {
    setFilter({ ...filter, [field]: value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const startDate = filter.startDate ? new Date(filter.startDate) : null;
    const endDate = filter.endDate ? new Date(filter.endDate) : null;

    return (
      (!startDate || expenseDate >= startDate) &&
      (!endDate || expenseDate <= endDate)
    );
  });

  return (
    <div className="container max-w-3xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-600">
        Expense Tracker
      </h1>
      <div className="flex mb-4 space-x-4">
        <div>
          <label
            htmlFor="startDate"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={filter.startDate}
            onChange={(e) => handleFilterChange("startDate", e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={filter.endDate}
            onChange={(e) => handleFilterChange("endDate", e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;

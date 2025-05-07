import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced validation
    if (!title || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }

    if (parseFloat(amount) <= 0) {
      alert("Amount must be a positive number");
      return;
    }

    if (new Date(date) > new Date()) {
      alert("Date cannot be in the future");
      return;
    }

    const expenseData = {
      title,
      amount: parseFloat(amount),
      date,
    };

    onAddExpense(expenseData);

    // Reset form
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-gray-700">
        Add New Expense
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What did you spend on?"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How much did you spend?"
            step="0.01"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;

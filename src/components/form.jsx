import React, { useState } from 'react'

export default function Form( expenses ) {
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  console.log(expense);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="border border-[#d8d8d8] rounded-2xl w-100 p-4 flex flex-col gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
        <h3 className="font-bold text-2xl font-serif">
            Add Expense
        </h3>

        <h5 className="text-gray-800">
            Enter your expense details below
        </h5>

        <input 
            type="text" 
            placeholder="Enter expense name" 
            className="border rounded-md p-2 outline-indigo-500" 
            value={expense.name} 
            onChange={
                (event) => 
                {setExpense({...expense, name: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense description" 
            className="border rounded-md p-2 outline-indigo-500" 
            value={expense.description} 
            onChange={
                (event) => 
                {setExpense({...expense, description: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense category" 
            className="border rounded-md p-2 outline-indigo-500" 
            value={expense.category} 
            onChange={
                (event) => 
                {setExpense({...expense, category: event.target.value})}
            } 
        />
        <input 
            type="number" 
            placeholder="Enter amount" 
            className="border rounded-md p-2 outline-indigo-500" 
            value={expense.amount} 
            onChange={
                (event) => 
                {setExpense({...expense, amount: event.target.value})}
            } 
        />
        <input 
            type="date" 
            placeholder="dd/mm/yy" 
            className="border rounded-md p-2 outline-indigo-500" 
            value={expense.date} 
            onChange={
                (event) => 
                {setExpense({...expense, date: event.target.value})}
            } 
        />

        <button type="submit" className="" onSubmit={handleSubmit}>
            Submit
        </button>
    </form>
  )
}

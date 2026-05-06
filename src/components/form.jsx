import React, { useState } from 'react'

export default function Form( expenses ) {
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    date: ""
  });

  console.log(expense);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(expense);
  }

  function handleChange(event) {
    const { name, value} = event.target;
    setExpense({...expense, [name]: value});
  }

  return (
    <form className="border border-[#d8d8d8] rounded-2xl w-100 p-6 flex flex-col gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl font-(--font-headings)">
                Add Expense
            </h3>

            <h5 className="text-gray-800 font-medium font-(font-sans)">
                Enter your expense details below
            </h5>
        </div>

        <input 
            type="text" 
            placeholder="Enter expense name" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={expense.name} 
            onChange={
                (event) => 
                {setExpense({...expense, name: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense description" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={expense.description} 
            onChange={
                (event) => 
                {setExpense({...expense, description: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense category" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={expense.category} 
            onChange={
                (event) => 
                {setExpense({...expense, category: event.target.value})}
            } 
        />
        <input 
            type="number" 
            placeholder="Enter price" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={expense.price} 
            onChange={
                (event) => 
                {setExpense({...expense, price: event.target.value})}
            } 
        />
        <input 
            type="date"
            className="border border-gray-300 rounded-md p-2 outline-green-500 placeholder:text-grey-300" 
            value={expense.date} 
            onChange={
                (event) => 
                {setExpense({...expense, date: event.target.value})}
            } 
        />

        <button type="submit" className="border-none rounded-md p-2 w-full text-md bg-green-500 hover:bg-green-700 cursor-pointer" onSubmit={handleSubmit}>
            Submit
        </button>
    </form>
  )
}

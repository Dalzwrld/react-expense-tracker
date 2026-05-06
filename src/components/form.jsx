import React, { useState } from 'react'

export default function Form( expenses ) {
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: 0,
    date: ""
  });

  console.log(expense);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="">
        <h3 className="">
            Add Expense
        </h3>

        <h5 className="">
            Enter your expense details below
        </h5>

        <input 
            type="text" 
            placeholder="Enter expense name" 
            className="" 
            value={expense.name} 
            onChange={
                (event) => 
                {setExpense({...expense, name: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense description" 
            className="" 
            value={expense.description} 
            onChange={
                (event) => 
                {setExpense({...expense, description: event.target.value})}
            } 
        />
        <input 
            type="text" 
            placeholder="Enter expense category" 
            className="" 
            value={expense.category} 
            onChange={
                (event) => 
                {setExpense({...expense, category: event.target.value})}
            } 
        />
        <input 
            type="number" 
            placeholder="Enter amount" 
            className="" 
            value={expense.amount} 
            onChange={
                (event) => 
                {setExpense({...expense, amount: event.target.value})}
            } 
        />
        <input 
            type="date" 
            placeholder="dd/mm/yy" 
            className="" 
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

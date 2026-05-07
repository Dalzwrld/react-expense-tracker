import React, { useState } from 'react'

function Form( addExpense ) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    date: ""
  });

  function handleSubmit(event) {
    event.preventDefault();

    addExpense(formData);

    setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        date: ""
    });
  }

  console.log(addExpense);

  return (
    <form className="border border-[#d8d8d8] rounded-2xl w-100 p-6 flex flex-col gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.25)]" onSubmit={handleSubmit}>
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
            value={formData.name} 
            onChange={
                (event) => 
                    {setFormData({...formData, name: event.target.value})}
            }
            required
        />
        <input 
            type="text" 
            placeholder="Enter expense description" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={formData.description} 
            onChange={
                (event) => 
                    {setFormData({...formData, description: event.target.value})}
            }
            required 
        />
        <input 
            type="text" 
            placeholder="Enter expense category" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={formData.category} 
            onChange={
                (event) => 
                    {setFormData({...formData, category: event.target.value})}
            }
            required 
        />
        <input 
            type="number" 
            placeholder="Enter price" 
            className="border border-gray-300 rounded-md p-2 outline-green-500" 
            value={formData.price} 
            onChange={
                (event) => 
                    {setFormData({...formData, price: event.target.value})}
            }
            required 
        />
        <input 
            type="date"
            className="border border-gray-300 rounded-md p-2 outline-green-500 placeholder:text-grey-300" 
            value={formData.date} 
            onChange={
                (event) => 
                    {setFormData({...formData, date: event.target.value})}
            }
            required 
        />

        <button type="submit" className="border-none rounded-md p-2 w-full text-md bg-green-500 hover:bg-green-700 cursor-pointer">
            Submit
        </button>
    </form>
  )
}

export default Form
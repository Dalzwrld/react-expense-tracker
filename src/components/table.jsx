import React from 'react'
import { useState, useEffect } from 'react'

export default function Table() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
        {
            name: "Smocha",
            description: "Wednesday's lunch",
            category: "Food",
            price: "90",
            date: "05/06/2026"
        },

        {
            name: "Atomic Habits",
            description: "Add to book collection",
            category: "Books",
            amount: "600",
            date: "04/30/2026"
        }
    ]);
  }, []);

  return (    
    <div className="">
        {expenses.map((expense) => {
            <table className="">
                <thead className="">
                    <tr className="">
                        <td className="Expense"></td>
                        <td className="Description"></td>
                        <td className="Category"></td>
                        <td className="Price"></td>
                        <td className="Date"></td>
                    </tr>
                </thead>    
    
                <tbody className="">
                    <tr className="">
                        <td className="">{expense.name}</td>
                        <td className="">{expense.description}</td>
                        <td className="">{expense.category}</td>
                        <td className="">{expense.price}</td>
                        <td className="">{expense.date}</td>
                    </tr>
                </tbody>
            </table>
        })}
    </div>
  )
}

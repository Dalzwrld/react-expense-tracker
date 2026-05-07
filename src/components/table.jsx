import React, { useState } from 'react'

export default function Table() {
  const [expenses, setExpenses] = useState([]);

  return (    
    <div className="">
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
                {expenses.map((expense, index) => {
                    <tr key={index} className="">
                        <td className="">{expense.name}</td>
                        <td className="">{expense.description}</td>
                        <td className="">{expense.category}</td>
                        <td className="">{expense.price}</td>
                        <td className="">{expense.date}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

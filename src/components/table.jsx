import React from 'react'

export default function table() {
  return (    
    <div className=''>
        {expenses.map((expense) => {
            <table className=''>
                <thead className=''>
                    <tr className="">
                        <td className="Expense"></td>
                        <td className="Description"></td>
                        <td className="Category"></td>
                        <td className="Amount"></td>
                        <td className="Date"></td>
                    </tr>
                </thead>    
    
                <tbody className="">
                    <tr className="">
                        <td className="">{expense.id}</td>
                        <td className="">{expense.name}</td>
                        <td className="">{expense.description}</td>
                        <td className="">{expense.category}</td>
                        <td className="">{expense.amount}</td>
                        <td className="">{expense.date}</td>
                    </tr>
                </tbody>
            </table>
        })}
    </div>
  )
}

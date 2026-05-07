import React from 'react'

function Table({ expenses }) {
    function handleData() {
        useEffect(() => {
            fetch('http://localhost:3000/expenses')
            .then((res) => res.json())
            .then((data) => setExpenses(data))
            .catch((err) => console.error(err));
        }, []);
    }

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

export default Table
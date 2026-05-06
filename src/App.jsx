import React, { useState } from 'react'
// import Filter from './components/filter'
import Form from './components/form'
// import Table from './components/table'

function App() {
  const [expense, setExpense] = useState([]);
  
  return (
    <div className="w-full h-screen font-(--font-sans)">
      <div className="w-full h-25 flex flex-col items-center justify-center font-serif">
        <h1 className="text-4xl font-bold">Expense tracker</h1>
        <h5 className="text-md text-gray-500">Start taking control of your finances and life. Record, categorize and analyze your spending.</h5>
      </div>

      <div className="">
        <div className="">
          <Form />
        </div>

        <div className="">
          <div className="">
            {/* <Filter /> */}
          </div>

          <div className="">
            {/* <Table /> */}
          </div>
        </div> 
      </div>
    </div>
  )
}

export default App

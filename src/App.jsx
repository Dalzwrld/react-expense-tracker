import React, { useState } from 'react'
// import Filter from './components/filter'
import Form from './components/form'
// import Table from './components/table'

function App() {
  const [expense, setExpense] = useState([]);
  
  return (
    <div className="w-full h-screen font-(--font-sans) flex flex-col px-40 py-5 gap-4 bg-[#f4f4f4]">
      <div className="w-full h-25 flex flex-col items-center justify-center font-serif gap-2">
        <h1 className="text-4xl font-bold">Expense tracker</h1>
        <h5 className="text-xl text-gray-500">Start taking control of your finances and life. Record, categorize and analyze your spending.</h5>
      </div>

      <div className="flex w-auto h-auto gap-2">
        <div className="">
          <Form />
        </div>

        <div className="flex flex-col items-start w-auto h-auto gap-2">
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

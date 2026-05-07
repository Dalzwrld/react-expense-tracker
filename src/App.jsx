import React, { useState } from 'react'
import Filter from './components/filter'
import Form from './components/form'
import Table from './components/table'

function App() {  
  return (
    <div className="w-full h-screen flex flex-col px-40 py-5 gap-4 bg-[#f4f4f4]">
      <div className="w-full h-25 flex flex-col items-center justify-center gap-2 mb-5">
        <h1 className="text-4xl font-(--font-title)">Expense tracker</h1>
        <h5 className="text-md text-gray-500 font-(--font-body)">Start taking control of your finances and life. Record, categorize and analyze your spending.</h5>
      </div>

      <div className="flex w-auto h-auto gap-2">
        <div className="">
          <Form />
        </div>

        <div className="flex flex-col items-start w-auto h-auto gap-2">
          <div className="">
            <Filter />
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

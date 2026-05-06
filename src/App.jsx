import React, { useState } from 'react'
import Filter from './components/filter'
import Form from './components/form'
import Table from './components/table'

function App() {
  return (
    <div className=""> {/**Container */}
      <div className="">
        <h1 className="">Expense tracker</h1>
        <h5 className="">Start taking control of your finances and life. Record, categorize and analyze your spending.</h5>
      </div>

      <div className="">
        <div className="">
          <Form />
        </div> {/**Form */}

        <div className=""> {/**Expense filters & list */}
          <div className="">
            <Filter />
          </div> {/**Filter */}

          <div className="">
            <Table />
          </div> {/**List */}
        </div> 
      </div>
    </div>
  )
}

export default App

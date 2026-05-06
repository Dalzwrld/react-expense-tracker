import React, { useState } from 'react'

function Form() {
  return (
    <form className="">
        <h3 className="">
            Add Expense
        </h3>

        <h5 className="">
            Enter your expense details below
        </h5>

        <input type="text" placeholder="Enter expense name" className="" />
        <input type="text" placeholder="Enter expense description" className="" />
        <input type="text" placeholder="Enter expense category" className="" />
        <input type="number" placeholder="Enter amount" className="" />
        <input type="date" placeholder="dd/mm/yy" className="" />

        <button className="">
            Submit
        </button>
    </form>
  )
}

export default Form

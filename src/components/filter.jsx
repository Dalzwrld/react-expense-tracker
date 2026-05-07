import React, { useState } from 'react'
import { Search } from 'lucide-react'

function Filter() {
  return (
    <div className="">
      <Search className="w-2 h-2 object-cover" />

      <input 
        type="text" 
        placeholder="Search Expenses..." 
        className="border rounded-md p-2 flex w-20 h-5 gap-1 text-sm font-(--font-sans) text-gray-600"
        value={searchExpense}
        onChange={
          (event) => 
            setSearchExpense(event.target.value)
        }
      />
    </div>
  )
}

export default Filter
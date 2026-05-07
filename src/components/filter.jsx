import React from 'react'
import { Search } from 'lucide-react'

export default function Filter() {
  function handleFilter() {}

  return (
    <div className="">
        <button className="border rounded-md p-2 flex w-10 h-5 gap-1">
            <Search className="w-2 h-2 object-cover" />
            <span className="text-sm font-(--font-sans) text-gray-600">Search Expenses</span>
        </button>
    </div>
  )
}

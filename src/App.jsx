import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=""> {/**Container */}
      <div className=""> {/**Heading */}
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

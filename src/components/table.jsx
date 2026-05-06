import React from 'react'

export default function table() {
  return (    
    <div className=''>
        {expenses.map((expense) => {
            <table className=''>
                <thead className=''>
                    <tr className="">
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                </thead>    
    
                <tbody className="">
                    <tr className="">
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                        <td className=""></td>
                    </tr>
                </tbody>
            </table>
        })}
    </div>
  )
}

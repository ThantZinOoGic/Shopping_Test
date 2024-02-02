import React from 'react'

export default function CartShow({itemList}) {
  return (
    <div className='col-md-3'>
      {
        itemList.map((item, i)=>{
          return(<div key={i}>
            <p>Name - {item.name}</p>
            <p>Name - {item.price}</p>
          </div>)
        })
      }
    </div>
  )
}

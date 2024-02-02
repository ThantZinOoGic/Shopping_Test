import React from 'react'
import Item from './Item';

export default function ItemsShow({data, addToCartHandler}) {
  return (
    <div className='row'>
      {
        data.map((item,i)=><Item key={i} item={item} addToCartHandler={addToCartHandler}/>)
      }
    </div>
  ) 
}
    
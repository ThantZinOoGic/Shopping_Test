import React, { useState } from 'react'
import ItemsShow from './ItemsShow'
import CartShow from './CartShow';
import image from './../images/image.jpg';

let data =[
  {
    name : "Item One",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Two",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Three",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Four",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Five",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item One",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Two",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Three",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Four",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Five",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Four",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  },
  {
    name : "Item Five",
    price : "100",
    size : "S, M, L, XL",
    image : image,
    color : 'White, Black, Grey'
  }
]
export default function MainPage() {
  let [itemList, setItemList] = useState([{name : "hello"}]);
  const addToCartHandler = (item) => {
    setItemList([...itemList, item]);
    console.log(itemList);
  }
  return (
    <div className='container'>
        <div className='row justif-content-around'>
          <div className='col-md-8'>
            <ItemsShow data={data} addToCartHandler={addToCartHandler} />
          </div>
          <div className='col-md-8'>
            {/* <CartShow className='col-md-4' itemList={itemList}/> */}
          </div>
        </div>
    </div>
  )
}

import React from 'react';

export default function Item({item, addToCartHandler}) {
  const addToCard = () => {
    addToCartHandler(item);
  }
  return (
    <div className='col-md-4 mb-3'>
        <div className="card shadow">
          <img src={item.image}/>
          <div className="card-body">
              <div className='col-12'>
                <div className='d-flex align-items-end justify-content-between'>
                  <h6 className='mb-0'>{item.name}</h6>
                  <p className='mb-0'>$ {item.price}</p>
                </div>
              </div>
              <p className='mt-3'>Size - {item.size}</p>
              <p className='mt-3'>Color - {item.color}</p>
              <a className='btn btn-primary float-end' onClick={addToCard}>add</a>
          </div>
        </div>
    </div>
  )
}

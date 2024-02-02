import React from 'react';

export default function ItemCrad(props) 
{
  let {name, price, size, color, preImage} = {...props};
  return (
    <div className='col-md-3 order-sm-1'>
      <div className="card shadow">
          <img src={preImage}/>
          <div class="card-body">
              <div className='col-12'>
                <div className='d-flex align-items-end justify-content-between'>
                  <h6 className='mb-0'>{name}</h6>
                  <p className='mb-0'>$ {price}</p>
                </div>
              </div>
              <p className='mt-3'>Size - {size}</p>
              <p className='mt-3'>Color - {color}</p>
              <a className='btn btn-primary float-end' disabled>add</a>
          </div>
        </div>
    </div>
  )
}

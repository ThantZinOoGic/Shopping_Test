import React, { useRef } from 'react';

export default function ItemAdd(props) 
{
    let{ nameOnChangeHandler,
        priceOnChangeHandler,
        sizeOnChangeHandler,
        colorOnChangeHandler,
        imageOnChangeHandler } ={...props};

  return (
    <div className='col-md-5'>
        <form>
            <div class="mb-3">
              <label class="form-label">Item Name</label>
              <input type="text" 
                     class="form-control"
                     onChange={nameOnChangeHandler}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Price</label>
              <input type="text" 
                     class="form-control"
                     onChange={priceOnChangeHandler}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Available Size</label>
              <input type="text" 
                     class="form-control"
                     onChange={sizeOnChangeHandler}/>
            </div>
            <div class="mb-3">
              <label class="form-label">Color</label>
              <input type="text" 
                     class="form-control"
                     onChange={colorOnChangeHandler}/>
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile" onChange={imageOnChangeHandler}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

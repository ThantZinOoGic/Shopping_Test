import React, { useState } from 'react';
import ItemAdd from './ItemAdd';
import ItemCard from './ItemCard';
import image1 from './../images/image.jpg';

export default function InputForm() {
    let [name, setName] = useState('Item Name');
    let [price, setPrice] = useState('0.00');
    let [size, setSize] = useState('S, M, L, XL');
    let [color, setColor] = useState('White, Black, Grey');
    let [image, setImage] = useState(image1);
    let [preImage, setPreImage] = useState(image1);

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
        console.log(name);

    }
    const priceOnChangeHandler = (e) => {
        setPrice(e.target.value);
    }
    const sizeOnChangeHandler = (e) => {
        setSize(e.target.value);
    }
    const colorOnChangeHandler = (e) => {
        setColor(e.target.value);
    }
    const imageOnChangeHandler = (e) => {
        let file = e.target.files[0];
        if(file)
        {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreImage(reader.result);
            }
            setImage(file);
        }
        setImage(e.target.file);
    }
    return (
        <div className='container'>
            <div className='row justify-content-around vh-100 align-items-center'>
                <ItemAdd nameOnChangeHandler={nameOnChangeHandler}
                         priceOnChangeHandler={priceOnChangeHandler}
                         sizeOnChangeHandler={sizeOnChangeHandler}
                         colorOnChangeHandler={colorOnChangeHandler}
                         imageOnChangeHandler={imageOnChangeHandler}/>
                <ItemCard name={name}
                          price={price}
                          size={size}
                          color={color}
                          preImage={preImage}/>
            </div>
        </div>
    )
}

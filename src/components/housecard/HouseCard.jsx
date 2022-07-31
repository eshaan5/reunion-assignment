import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './housecard.css'
import { BiBed, BiBath } from 'react-icons/bi'
import { IoTabletLandscapeOutline } from 'react-icons/io5'

const HouseCard = ({ product }) => {
  return (
    <div className='house-card'>
        <img src={product.img} alt="" />
        <div className="price">
           <p><span>${product.price}</span>/month</p>
           <AiOutlineHeart className='heart' size={21} /> 
        </div>
        <h3 className='house-name'>{product.name}</h3>
        <p className='house-address'>2699, Green Valley, Highland Lake, {product.location}</p>
        <hr />
        <div className="details">
        <div className="item"><BiBed className='icon' /><p>3 Beds</p></div>
        <div className="item"><BiBath className='icon' /><p>3 Bathrooms</p></div>
        <div className="item"><IoTabletLandscapeOutline className='icon' /><p>8x10m<sup>2</sup></p></div>
        </div>
    </div>
  )
}

export default HouseCard
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './housecard.css'
import image from './house.jpeg'
import { BiBed, BiBath } from 'react-icons/bi'
import { IoTabletLandscapeOutline } from 'react-icons/io5'

const HouseCard = () => {
  return (
    <div className='house-card'>
        <img src={image} alt="" />
        <div className="price">
           <p><span>$505</span>/month</p>
           <AiOutlineHeart className='heart' size={21} /> 
        </div>
        <h3 className='house-name'>Palm Harbor</h3>
        <p className='house-address'>2699, Green Valley, Highland Lake, FL</p>
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
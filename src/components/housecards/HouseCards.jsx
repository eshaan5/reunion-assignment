import React from 'react'
import HouseCard from '../housecard/HouseCard'
import './housecards.css'

const HouseCards = ({ products }) => {
  return (
    <div className='cards'>
        {products.map(product => (
            <HouseCard key={product.id} product={product} />  
        ))}
    </div>
  )
}

export default HouseCards
import React from 'react'
import './ReletedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReletedProduct = () => {
  return (
    <div className='reletedproduct'>
      <h1>Related Product</h1>
      <hr />
      <div className="reletedproduct-items">
        {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
        })}
      </div>
    </div>
  )
}

export default ReletedProduct
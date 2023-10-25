import React from 'react'
import Hero from '../Compponets/Hero/Hero'
import Popular from '../Compponets/Popular/Popular'
import Offer from '../Compponets/Offers/Offer'
import NewCollection from '../Compponets/NewCollection/NewCollection'
import NewLetter from '../Compponets/NewLetter/NewLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewLetter/>
    </div>
  )
}

export default Shop

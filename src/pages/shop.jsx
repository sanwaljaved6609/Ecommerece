import React from 'react'
import Header from '../components/Header/Header'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollection from '../components/newCollection/newCollection'
import NewsLetter from '../components/NewsLetter/newsletter'

function Shop() {
  return (
    <div>

      <Header/>

      <Popular/>
      
      <Offers/>

      <NewCollection/>

      <NewsLetter/>
      
    </div>
  )
}

export default Shop

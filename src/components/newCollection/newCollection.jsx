import React from 'react'
import './newCollection.css'
import new_collection from '../assets/new-collection'
import Items from '../items/items'

function NewCollection() {
  return (
    <div className='new-collections'>

        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {
                new_collection.map((e)=>{
                    return <Items key={e.id} image={e.image} name={e.name} new_price={e.new_price} old_price={e.old_price}  />
                })
            }
        </div>
      
    </div>
  )
}

export default NewCollection

import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumbs/breadcrumb';

function Product() {

  const {all_products} = useContext(shopContext);
  const {productID} = useParams();

  console.log('productID:', productID);

  const numericID = Number(productID);

  // const product = all_products.find((e)=> e.id === productID)

  const product = all_products.find((e)=> e.id === numericID)

  return (
    <div>

      <Breadcrumb product={product}/>
      
    </div>
  )
}

export default Product




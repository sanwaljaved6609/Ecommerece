import React from 'react'
import './breadcrumb.css'
// import product from '../../pages/product'
import { FaArrowRight } from "react-icons/fa";

function Breadcrumb(props) {

    const {product} = props;

    if (!product) {
      return null; 
    }

  return (
    <div className='breadcrum'>

        HOME <FaArrowRight /> SHOP <FaArrowRight /> {product.category} <FaArrowRight /> {product.name}
      
    </div>
  )
}

export default Breadcrumb

import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { shopContext } from '../context/shopContext';
import Items from '../components/items/items';
// import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

function ShopCategory(props) {

  const {all_products} = useContext(shopContext);

  return (
    <div className='shop_category'>
      {props.banner}
      
      <div className="shopcategory_indexSort">
        <p>
          Showing <span>{props.category}</span> Products
        </p>
        <div className="shopcategory_sort">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>

      <div className="shopcategory_products">
        {
          all_products.map((e,i)=>{
            if(props.category===e.category){
              return <Items image={e.image} name={e.name} new_price={e.new_price} old_price={e.old_price}  />
            }
            else{
              return null;
            }
          })
        }
      </div>

      <div className="shopcategory_loadmore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory

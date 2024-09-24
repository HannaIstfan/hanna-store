import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import './CSS/ShopCategory.css'
function ShopCategory(props) {
  const {all_product}= useContext(ShopContext);
  return (

    <div className='shop-category'>
      <div className='shop-category-image'>
        <div className='shop-category-image-content' >
        <p>FLAT 50% OFF</p>
        <p>12 Hours 20 Mins</p>
        <button>Explore now</button>
          </div>
        </div>

      <div className='shopcategory_indexsort'>
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      </div>
      
        <div className='shopcategory-products'>
          {all_product.map((item,i)=>{
            if (props.category === item.category){
              return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null;
            }
          })}
        </div>
        <div className='shopcategory-loadmore'>
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory

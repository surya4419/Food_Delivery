import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'
import { Link } from 'react-router-dom'

const Fooditem = ({_id,name,price,description,image}) => {

 
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
 

  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className='food-item-image' src={url+"/images/"+image} alt="" />
        
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className='food-item-desc' >{description}</p>   
          <p className='food-item-price'>${price}   
             <Link to="/Cart">
                <button onClick={() => {
                  addToCart(_id);
                   window.scrollTo(0, 0); // Scroll to the top of the page
                 }}>
                  Buy Now
                  </button>
              </Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Fooditem

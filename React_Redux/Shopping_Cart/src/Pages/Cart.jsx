import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_from_cart } from "../Redux/Action";
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const items = useSelector((state) => state.ShoppingReducer);
const dispatch=useDispatch();
  useEffect(() => {
    setSelectedItem(items.item);
  }, [items.item]);
  
  const calculateTotalPrice= selectedItem.reduce((accum,product)=>{
      return accum + product.price

  },0)

  const gstFee=Math.round(Math.random(10) * 50);
  return (
    <div className="container cart-container ">
      {/* details of item */}
      <section className="section-cart  flex">
        {/* img ,product name, price ,+1, remove,place order */}
        <ul className="Ul-cart flex">
          <div className="item-data-cart flex">
            {selectedItem?.map((currItem) => (
              <li className="flex " key={currItem.id}>
                <div className="data-cart flex">
                  <img src={currItem.image} />
                  <div className="item-actual-data flex">
                    <span className="item-name">{currItem.title}</span>
                    <span className="item-price">
                      Price: $ {currItem.price}
                    </span>
                    <a onClick={()=>dispatch(delete_from_cart(currItem.id))}>remove </a>
                  </div>
                </div>
               
              </li>
            ))}
          </div>
          {selectedItem.length>0 &&  <div className="checkout-cart">
            <h2>Price Details</h2>
            <hr />
           
            <div className="checkout-details">
              <p className="flex">
                
                <span>
                  Price({selectedItem.length})
                  {selectedItem.length > 1 ? "items" : "item"}
                </span>
                <span>
                {calculateTotalPrice.toFixed(3)}
                </span>
              </p>
              <p className="flex">
                <span> Platform fee</span> <span>$ 3</span>
              </p>
              <p className="flex">
                
                <span>Gst Fee </span>
                <span>$ {gstFee}</span>
              </p>
              <p>
                <span>Total Price</span>
                <span> $ {(gstFee+3+calculateTotalPrice).toFixed(3)}</span>
              </p>
            </div>
          </div>}
         
        </ul>

        <NavLink to="/"> <button> go back </button> </NavLink>
      </section>
    </div>
  );
};

export default Cart;

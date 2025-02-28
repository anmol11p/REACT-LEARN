import React, { useEffect, useMemo, useState, useTransition } from "react";
import Loader from "./Loader";
import { getCardInformation } from "../API/Shopping";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../Redux/Action";
const Product = () => {
  const [isPending, startTransition] = useTransition();
  const dispatch=useDispatch();
    const fetchData=()=>{
  startTransition(async () => {
    const res = await getCardInformation();
    setdata(res.data);
  });
      }
  const [data, setdata] = useState(null);
  useEffect(() => {
   fetchData()
  }, []);

  if (isPending) {
    return <Loader/>
  }
  return (
    <>
    
      <div className="container">
        <main>
          <ul className="card grid grid-three-cols">
            {data?.map((currElem) => {
              return (
                <li className="card-list flex" key={currElem?.id}>
                  <img src={currElem?.image} alt={currElem?.title} />
                  <div className="card-information flex">
                    <span className="title">{currElem?.title}</span>
                    <p className="price">
                      <span> price </span>: {currElem?.price}
                    </p>
                    <span className="categories">{currElem?.category}</span>
                    <span className="description">
                      {currElem.description.length >= 131
                        ? currElem.description.slice(0, 131) + "..."
                        : currElem.description}
                    </span>
                  </div>
                  <NavLink to="/cart" >
                    <button onClick={()=>dispatch(add_to_cart(currElem))}>add to cart</button>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Product;

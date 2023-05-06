import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
const Card = (props) => {
  let dispatch = useDispatchCart();
  let options = props.options;
  //this extracts all the keys from the key value pair
  //  object and helps display only keys
  let priceOptions = Object.keys(options);
  let data = useCart();
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let finalPrice = qty * parseInt(options[size]);
  const handleAddToCart = async ()=>{
    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if(food.size === size) {
        await dispatch({ 
          type:"UPDATE",
          id:props.foodItem._id,
          price: finalPrice,
          qty:qty
        })
        return
      }
      else if (food.size !== size){
        await dispatch({
          type:"ADD",
          id:props.foodItem._id,
          name:props.foodItem.name,
          price:finalPrice,
          qty:qty,
          size:size
        })
        return
      }
      return
    }
   };


  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])

  return (
    <div>
      <div>
        <div className="card mt-3 bg-black text-light" style={{ width: "18rem", maxHeight:"360px" }}>
          <img className="card-img-top" style={{height:"140px", objectFit:"fill"}} src={props.foodItem.img} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className='container w-100'>
                <select className='m-2 h-100 bg-warning rounded' onChange={(e)=>setQty(e.target.value)}>
                    {Array.from(Array(6),(e,i)=>{
                      return(
                        <option key={i+1} value={i+1}> {i+1}</option>
                      )
                    })}
                </select>

              <select className='m-2 h-100 bg-warning rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                })}
              </select>  

              <div className='d-inline h-100 fs-5'>
               ₹{finalPrice}/-
              </div>
              <hr>
              </hr>
              <button className={'btn btn-warning justify-center ms-2'}
                      onClick={handleAddToCart}>
                 Add to Cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
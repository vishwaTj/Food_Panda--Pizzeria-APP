import React from 'react'

const Card = (props) => {
  
  let options = props.options;
  //this extracts all the keys from the key value pair
  //  object and helps display only keys
  let priceOptions = Object.keys(options);
  
  const handleAddToCart=()=>{};


  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight:"360px" }}>
          <img className="card-img-top" style={{height:"140px", objectFit:"fill"}} src={props.imgSrc} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                    {Array.from(Array(6),(e,i)=>{
                      return(
                        <option key={i+1} value={i+1}> {i+1}</option>
                      )
                    })}
                </select>

              <select className='m-2 h-100 bg-success rounded'>
                {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                })}
              </select>  

              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>
              <hr>
              </hr>
              <button className={'btn btn-success justify-center ms-2'}
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
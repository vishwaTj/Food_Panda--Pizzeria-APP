import React from 'react'

const Card = () => {
  return (
    <div>
              <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight:"360px" }}>
          <img className="card-img-top" src="https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a Recipe</p>
            <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded'>
                    {Array.from(Array(6),(e,i)=>{
                      return(
                        <option key={i+1} value={i+1}> {i+1}</option>
                      )
                    })}
                </select>

              <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">full</option>
              </select>  
              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
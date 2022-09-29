import React from 'react'
import popular from './images/popular.png';
// import popular1 from './images/popular1.png'
// import popular2 from './images/popular2.png'
import './Popular.css'


function Popular() {
  return (
    <div className='d-flex flex-row gap-1 mt-3 p-5 '>
        <div className="col d-flex  ">
            <img src={popular} alt="" width="600px" height="500px" style={{borderRadius:"5px"}}/>
        </div>
        <div className="try_box col ">
            
                <div className='box1'/>
                <div className='box2'/>
        </div>
        
      
    </div>
  )
}

export default Popular

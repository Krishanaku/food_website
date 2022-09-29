import React from "react";
import "./form.css";

function From() {
  return (
    <>
    
    <div className="d-flex flex-column justify-content-center align-items-center ">
      {/* <div className=" "> */}
        {/* <div className=""> */}
        <div className="boxes1">
          <h6>RESERVATION</h6>
        </div>
        <div className="boxes2">
          <h1>BOOK YOUR TABLE</h1>
        </div>
        
      {/* </div> */}

      

    </div>
          <div >
          <form className="form_container">
      
        <div className="colo">
          <input type="text" className="form-control mb-3" placeholder="Name"/>
          <input type="text" className="form-control mb-3" placeholder="Email"/>
          <input type="text" className="form-control mb-3" placeholder="Date"/>
        </div>
        <div className="colo">
          <input type="text" className="form-control mb-3" placeholder="Time"/>
          <input type="text" className="form-control mb-3" placeholder="People"/>
          <button type="button" className="btn btn-danger rounded-0">FIND A TABLE</button>

        </div>
        
      
    </form>
          </div>

          </>

    
  );
}

export default From;

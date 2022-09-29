import React from "react";
import "./Choose.css";
import bug1 from "./images/bug1.png";
import bug2 from "./images/bug2.png";
import bug3 from "./images/bug3.png";

function Choose() {
  return (
    <div className=" d-flex  justify-content-center align-items-center ">
      <div className=" ">
        {/* <div className=""> */}
        <div className="boxs_1">
          <h6>ALWAYS TASTY BURGERS</h6>
        </div>
        <div className="boxs_2">
          <h1>CHOOSE & ENJOY</h1>
        </div>
        <div className="boxs_3">
          <p className="text">
            Lorem ipsum dolor sit amet t Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptatum libero ullam doloremque vel ut culpa
            corporis aut nam praesentium numquam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vitae, error!
          </p>
        </div>
        <div className="chooseConatine  d-flex justify-content-around   mt-5">
          <div className="img1 ">
            <img src={bug1} alt="" width='350px' height='300px'/>
            <div className="text1 align-items-center text-center ">
              <h4>LOREM IPSUM DOLOR</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.krishnaods ldnmk cakn icjka</p>
              <button type="button" className="btn btn-danger rounded-0">ORDER NOW</button>
            </div>
            

          </div>
          <div className="img2">
            <img src={bug2} alt=""  width='350px' height='300px'/>
            <div className="text1 align-items-center text-center ">
              <h4>LOREM IPSUM DOLOR</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.krishnaods ldnmk cakn icjka</p>
              <button type="button" className="btn btn-danger rounded-0">ORDER NOW</button>
            </div>
          </div>
          <div className="img3">
            <img src={bug3} alt="" width='350px' height='300px' />
            <div className="text1 align-items-center text-center ">
              <h4>LOREM IPSUM DOLOR</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.krishnaods ldnmk cakn icjka</p>
              <button type="button" className="btn btn-danger rounded-0">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default Choose;

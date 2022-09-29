import React from "react";
import "./Events.css";
import events from './events.png'


function Events() {
  return (
    <div>
      <div className="container mt-5 p-5">
        <div className="discover_box shadow-lg p-3 mb-5 bg-white rounded d-flex flex-row">
          <div className="col p-3 text-left">
            <div>
              <p className="font-weight-bold">DISCOVER</p>
              <h3>UPCOMING EVENTS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veniam, eligendi qui commodi odit velit necessitatibus
                fugiat nobis voluptatum dignissimos et cumque quo impedit at
                itaque aliquam? Itaque, delectus repellat.
              </p>
              <div className="dot d-flex">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>

              </div>
              
            </div>
          </div>
          <div className="col">
            <img src={events} alt="" width='580px' height='390px' />
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default Events;

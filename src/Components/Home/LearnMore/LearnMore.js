import React from 'react';
import './LearnMore.css';
import Data from "./Data";

function LearnMore() {
  
  return (
    <div> 
        <div className="learn-container">
      {Data.map((item) => (
        <div key={item.id} className="learn-item">
            <div className="item-inner">
            <img src={item.image} alt="waste management" height={"30px"} width={"30px"}/> {/* Specify src and alt */}
                <div className='learn-text'>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                </div>
            </div>
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default LearnMore;
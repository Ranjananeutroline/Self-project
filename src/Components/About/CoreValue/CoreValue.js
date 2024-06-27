import React from "react";
import "./CoreValue.css";
import Data from "./Data";

function CoreValue(){
    return(
        <div>
            <div className="value-title">
                <h3>Our Core Values</h3>
                <p>Our Core Values describe who we actually are</p>
                <hr></hr>
            </div>
            <div className="value-container">
                {Data.map((item) => (
                    <div key={item.id} className="value-item">
                        <div className="value-inner-div">
                        <img src={item.image} alt="waste management" height={"45px"} width={"45px"}/> {/* Specify src and alt */}
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoreValue;
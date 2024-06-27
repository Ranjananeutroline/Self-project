import React from "react";
import "./Needs.css";
import Data from "./Data";

function Needs(){
    return(
        <div>
            <div className="needs-container">
                {Data.map((item) => (
                    <div key={item.id} className="needs-item">
                        <div>
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

export default Needs;
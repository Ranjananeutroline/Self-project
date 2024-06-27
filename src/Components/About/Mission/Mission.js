import React from "react";
import "./Mission.css";
import { BiBullseye } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';

function Mission(){
    return(
        <div>
            <div className="mission-div">
                <div className="mission-left">
                <img src='./mission.jpeg' alt='mission-image' height={"100%"} width={"100%"}></img>
                </div>
                <div className="mission-right">
                    <h3>Our Mission & Vision</h3>
                    <hr style={{textAlign:"left", width:"15%", margin:"0"}}></hr>

                    <div className="right-bottom">
                        <div className="bottom">
                        <p className="m-icon"><BiBullseye/></p>
                           <div className="b-right">
                                <h5>Our Mission</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           </div>
                        </div>
                        <div className="bottom">
                       <p className="v-icon"><AiFillEye/></p>
                        <div className="b-right">
                                <h5>Our Vision</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Mission;
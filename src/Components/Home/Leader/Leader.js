import React from 'react';
import './Leader.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Leader() {
  
  const recycle= 77;
  const wservice= 90;

  return (
    <div> 
        <h3 className='leader-title'>We're Leader In Waste Management Services</h3>
       <div className='leader'>
        <div className='leader-left'>
           <img src='./leader.jpg' alt='leader-image' height={"300px"} width={"400px"}></img>
        </div>
        <div className='leader-right'>
            <p>As a Leader, Your Company is likely at the forefont of innovative technologies and practices to optimize
              Waste Management Processes and minimize environmental impact. This may include exploring advanced recycling 
              methods, adopting efficient waste sorting techniques, and promoting sustainable waste reduction strategies.
            </p>
            <div className='re-div'>
            <p>Recycling</p>
            <div className='progress-container'>
              <ProgressBar animated now={recycle} />
              <span className='progress-label'>{`${recycle}%`}</span>
            </div>
          </div>
          <div className='ws-div'>
            <p>Waste Services</p>
            <div className='progress-container'>
              <ProgressBar  animated now={wservice} />
              <span className='progress-label'>{`${wservice}%`}</span>
            </div>
          </div>
            
        </div>
       </div>
   
    </div>
  );
}

export default Leader;
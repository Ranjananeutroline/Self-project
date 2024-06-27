import React from 'react';
import NavHead from "../Components/Home/NavHead/NavHead"
import Story from "../Components/About/Story/Story";
import Needs from "../Components/About/Needs/Needs";
import CoreValue from "../Components/About/CoreValue/CoreValue";
import Mission from "../Components/About/Mission/Mission";
import GoToTop from '../Components/GoToTop/GoToTop';

function AboutPage() {
  return (
      <div>
        <NavHead/>
        <Story/>
        <Needs/>
        <CoreValue/>
        <Mission/>
        <GoToTop/>
      </div>
  ) 
}

export default AboutPage;
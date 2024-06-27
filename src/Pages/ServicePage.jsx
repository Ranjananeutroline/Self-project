import React from 'react';
import NavHead from "../Components/Home/NavHead/NavHead"
import ServiceFilter from "../Components/Services/OurService/ServiceFilter";
import ChooseService from "../Components/Services/ServiceDetails/ChooseService";

function ServicePage() {
  return (
      <div>
        <NavHead/>
        <ServiceFilter/>
        <ChooseService/>
      </div>
  ) 
}

export default ServicePage;
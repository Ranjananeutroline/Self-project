import React from 'react';
import NavHead from "../Components/Home/NavHead/NavHead"
import Header from "../Components/Home/Header/Header"
import LearnMore from "../Components/Home/LearnMore/LearnMore"
import Leader from "../Components/Home/Leader/Leader"
import WasteService from "../Components/Home/WasteService/WasteService"
import Clients from "../Components/Home/Clients/Clients"
// import FAQ from "../Components/Home/FAQ/FAQ"
import ClientReview from "../Components/Home/ClientReview/ClientReview"
import GoToTop from '../Components/GoToTop/GoToTop';


function HomePage() {
  return (
      <div>
        <NavHead/>
        <Header/>
        <LearnMore/>
        <Leader/>
        <WasteService/>
        {/* <FAQ/> */}
        <Clients/>
        <GoToTop/>
        <ClientReview/>
      </div>
  ) 
}

export default HomePage;
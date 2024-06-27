import React from "react";
import "./Services.css";
import WasteService from "../../Home/WasteService/WasteService";


function ChooseService(){
    


    return(
        <div className="category-main">
            <WasteService showItemMoreButton={true} showReadMoreLink={false} />
        </div>
    )
}

export default ChooseService;
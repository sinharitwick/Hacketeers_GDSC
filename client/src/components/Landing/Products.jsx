import React from "react";
import Prodcutbox from "./Productbox";
import pimage1 from '../images/s1.jpg'
import pimage2 from '../images/s2.jpg'
import pimage3 from '../images/s3.jpg'

function Products(){
    return(
        <div id='products'>
            <h1>WHAT WE OFFER </h1><br />
            <p className="details"> <br/>Apart from extensive bio designing options, we also provide the following services to help you socialize.</p>
            <div className="a-container">
                <Prodcutbox image={pimage1} title="Chat System " />
                <Prodcutbox image={pimage2} title="Communities" />
                <Prodcutbox image={pimage3} title="Map of College Hotspots" />
            </div>
        </div>
    )
}
export default Products
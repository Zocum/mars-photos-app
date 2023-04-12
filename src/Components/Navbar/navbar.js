import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
           <ul>
               <li>
                   <Link to="/perseverance">
                       <img alt="perseverance" 
                        className="perr"
                        src="https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"
                        width={70} height={70}></img>
                        <p className="hide">Perseverance</p>
                    </Link>
                  
               </li>
               <li>
                   <Link to="/curiosity">
                       <img alt="curiosity" 
                        className="cuu"
                        src="https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg"
                        width={70} height={70}></img>
                        <p className="hide1">Curiosity</p>
                   </Link>
               </li>
               <li>
                   <Link to="/opportunity">
                       <img alt="opportunity" 
                        className="opp"
                        src="https://www.mdscc.nasa.gov/wp-content/uploads/2019/08/Opportunity.jpg"
                        width={70} height={70}></img>
                        <p className="hide2">Opportunity</p>
                   </Link>
               </li>
               <li>
                   <Link to="/spirit">
                       <img alt="spirit" 
                        className="spr"
                        src="https://www.mdscc.nasa.gov/wp-content/uploads/2019/08/spirit-2.jpg"
                        width={70} height={70}></img>
                        <p className="hide3">Spirit</p>
                   </Link>
               </li>
           </ul>    
        </nav>
    );
}

export default Navigation
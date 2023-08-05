import React, { useState } from 'react';
import './LoaderComponent.css'; // CSS file for LoaderComponent

const LoaderComponent = () => {
    const [getdata, setData] = useState();
     
    setInterval(() => {
         let value=3;
       
       
    }, 800)
    return (
        <div className="loader-container">
            <div className="loader-con">
                <div className="loader"></div>
            </div>

            <div className="heading-con" ><h2  style={{color:"brown"}}>Fetching data, just a moment few {getdata} second ..</h2></div>
        </div>
    );
};

export default LoaderComponent;

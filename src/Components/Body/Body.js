import React from 'react';
import imgmen from '../../image/header-man.png'
import './Body.css'

const Body = () => {
    return (
        
        <div className="container">
            <div className="row">
           <div className="col-12 col-md-6 mt-5 "> 
           <h1 className="fs-1"> 
                Great <span className="text-color">Online</span> <br />
                Learning Platform <br />
                To develop Skill <br /> 
                <button className="btn btn-color text-center mt-5"> LEARN MORE</button>
            </h1>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center" ><img className="img-men" src={imgmen} alt="" /></div>
            </div>
            </div>
                    );
                    };

export default Body;
import React from 'react';

const MainCourse = (props) => {
    const {name, url, price, author} = props.sub || {};
    return (
        <div className="col">
            
        <div className="card text-center h-100 bg-secondary bg-gradient"> 
        <div className="img-div"> <img src={url} className="card-img-top " alt=""/> </div>
        <div className="card-body text-light">
        <h5 className="card-title">{name}</h5>
        <div className="card-text"><h6> Author : {author} <br /></h6> </div>
        <div className="card-footer border-0 h-100 bg-transparent"> <button className="btn bg-info w-100" ><b> Read More</b></button> </div>

        {/* <div className="card-text"> <button className="btn btn-info mt-2">Read More</button> </div> */}
        </div>
        </div>
        </div>
    );
};

export default MainCourse;
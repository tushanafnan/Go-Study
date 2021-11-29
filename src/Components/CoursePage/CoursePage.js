import React from 'react';

const CoursePage = (props) => {
    const {name, url, price, author} = props.pd || {};
    return (
        <div className="col">
            
        <div className="card text-center h-100 bg-secondary bg-gradient"> 
        <div className="img-div"> <img src={url} className="card-img-top " alt=""/> </div>
        <div className="card-body text-light">
        <h5 className="card-title">{name}</h5>
        <div className="card-text"><h6> Author : {author} <br /> Price : ${price}</h6> </div>
      

        </div>
        </div>
        </div>
    );
};

export default CoursePage;
import React, { useEffect, useState } from 'react';
import MainCourse from '../MainCourse/MainCourse';
import best from '../../image/best.png'
import life from '../../image/learn-the-skill.png'
import learn from '../../image/lifetime.png'
import './Courses.css'

const Courses = () => {
    const [course, setCourse] = useState ([]);
    useEffect (()=> {

fetch ('https://raw.githubusercontent.com/tushanafnan/fake2/main/fake.json')
.then (res => res.json ())
.then (data => setCourse(data))
    }, [] )
    return (
<div>
    <h1 className="fs-1 ps-3 mb-5"> Our Course Be Like</h1>
        <div className="row text-center">
        <div className="col-md-12">
    
        <div className="row g-4 row-cols-1 row-cols-md-4 ms-2">
              
        {course.map ( sub => <MainCourse key= {sub.name} sub={sub}></MainCourse>)}
              
        </div>
        </div>
        </div>

        <h1 className="fs-1 text-center mt-5 mb-5"> Designed to be effortless for everyone</h1>

        <div className="card-group">
  <div className="card mx-3">
    <img src={learn} className="card-img-top img-fluid img-part" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Learn the latest skills</h5>
      <p className="card-text">Start streaming on-demand video lectures today from top instructors in subjects like business.</p>
     
    </div>
  </div>
  <div className="card mx-3">
    <img src={best} className="card-img-top img-fluid img-part " alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Best Instructor</h5>
      <p className="card-text">Start streaming on-demand video lectures today from top instructors in subjects like business.</p>
      
    </div>
  </div>
  <div className="card mx-3">
    <img src={life} className="card-img-top img-fluid img-part" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Lifetime Access</h5>
      <p className="card-text">Start streaming on-demand video lectures today from top instructors in subjects like business.</p>
      
    </div>
  </div>
</div>


        </div>
          
       
    );
};

export default Courses;
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CoursePage from '../CoursePage/CoursePage';
import Footer from './../Footer/Footer';

const Course = () => {
    const [courses, setCourses] = useState ([]);
    useEffect (()=> {
fetch ('https://raw.githubusercontent.com/tushanafnan/fakedata/main/fakedata.json')
.then (res => res.json ())
.then (data => setCourses(data))
    }, [] )
    return (
        <div>
        <Header></Header>
        <div>
            <h1 className="fs-1 text-center text-secondary mt-5 mb-5">Here our full course list</h1>
        <div className="row text-center">
        <div className="col-md-12">
    
        <div className="row g-4 row-cols-1 row-cols-md-4 ms-2">
              
        {courses.map ( pd => <CoursePage key= {pd.name} pd={pd}></CoursePage>)}
              
        </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Course;
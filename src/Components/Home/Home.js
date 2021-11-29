import React from 'react';
import Body from '../Body/Body';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Body></Body>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;
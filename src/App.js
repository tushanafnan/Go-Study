import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Course from './Components/Course/Course';
import Privacy from './Components/Privacy/Privacy';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {
  return (
    <div>

<Router>
          <Switch>
            <Route exact path="/">
      <Home></Home>
            </Route>
            <Route path="/home">
           <Home></Home>
            </Route>
            <Route path="/courses">
              <Course></Course>
              </Route>
            <Route path="/about">
             <About></About>
         </Route>
            <Route path="/contact">
              <Contact></Contact>
         </Route>
            <Route path="/privacy">
              <Privacy></Privacy>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>



    </div>
  );
}

export default App;

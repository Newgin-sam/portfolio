import React, { lazy, Suspense, useState } from 'react';
// import Footer from './componenets/footer/Footer';
// import Landing from './pages/landing/Landing';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Particles from 'react-particles-js';
import { particleJson } from './Models/particle';
import { AppContext } from './Context/AppContext';
import './App.scss';
import './sass/index.scss'

const Landing = lazy(() => import('./pages/landing/Landing'));
const Footer = lazy(() => import('./componenets/footer/Footer'));
const About = lazy(() => import('./pages/About/About'));
const Resume = lazy(() => import('./pages/Resume/Resume'));
const Certification = lazy(() => import('./pages/Certification/Certification'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

const App = (props) => {

  const [colorChange, setcolorChange] = useState(false);

  return (
    <div className="App">
      <Particles className="particle-container"
        params={{ ...particleJson }}
      />
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} >

        <Suspense fallback={<div />}>

          <AppContext.Provider value={{ colorChange, setcolorChange }}>
            <Landing />

            <Switch>

              <Route exact
                path='/'
                render={() => <div> </div>}
              />
              <Route exact
                path='/about'
                render={() => <About />}
              />
              <Route exact
                path='/resume'
                render={() => <Resume />}
              />
              <Route exact
                path='/certification'
                render={() => <Certification />}
              />
              <Route exact
                path='/contact'
                render={() => <Contact />}
              />

              <Route render={() => <Redirect to={{ pathname: "/" }} />} />

            </Switch>

            <Footer />

          </AppContext.Provider>

        </Suspense>

      </Scrollbars>
    </div>
  );
}

export default withRouter(App);

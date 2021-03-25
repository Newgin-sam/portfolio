import React,{lazy,Suspense} from 'react';
import Footer from './componenets/footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import './sass/index.scss'

const Landing = lazy(() => import ('./pages/landing/Landing'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <Switch>
          <Landing home={false} />
        
        </Switch>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;

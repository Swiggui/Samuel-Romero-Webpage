//import logo from './logo.svg';
//import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/urbanist";

import Home from './Pages/Home';
import AboutSamuel from './Pages/AboutSamuel';
import Credits from './Pages/Credits';
import Team from './Pages/Team';

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/AboutSamuel" exact element={<AboutSamuel/>}/>
        </Routes>
      </Router>
      <Footer/>
    </Fragment>
  );
}

//<Route path="/Credits" exact element={<Credits/>}/>
//<Route path="/Team" exact element={<Team/>}/>
export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';

function App() {

  return (
     <>
     <Home />
     <Header />
     <Breakfast />
     <Lunch />
     <Dinner />
    {/* <Routes>
        <Route exact path='/' Component={<Home />} ></Route>
        <Route path="/Breakfast" component={<Breakfast/>} />
    </Routes> */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nisi beatae, necessitatibus esse quia delectus expedita ut corporis saepe sunt voluptatum perferendis et deserunt hic iusto, dolor vero maxime veniam.</p>
    </>
  )
}

export default App

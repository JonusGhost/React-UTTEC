import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Registro';
import Home from './components/Home';
import Especialidad from './components/Especialidad';
import Cita from './components/Cita';
import Cita_list from './components/Cita_list';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/registro' Component={Register}/>
          <Route path='/home' Component={Home}/>
          <Route path='/cita' Component={Cita}/>
          <Route path='/cita_list' Component={Cita_list}/>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path='/especialidad/:id?' Component={Especialidad}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
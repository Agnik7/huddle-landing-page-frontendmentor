import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Mid from './components/Mid';
import Register from './components/Register';
function App() {
  return (
    <main className='min-h-screen w-full flex flex-wrap justify-center'>
      <Header />
      <Hero />
      <Mid/>
      <Register />
    </main>
  )
}

export default App

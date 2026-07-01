import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="hizmetler"><Services /></div>
      <div id="portfolyo"><Portfolio /></div>
      <div id="sürecimiz"><Process /></div>
      <div id="iletişim"><Footer /></div>
    </main>
  );
}
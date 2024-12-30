import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Lownav from './components/Lownav'
import MainPage from './components/MainPage';

const App = () => {
  return (
    <>
      <Header />
      <Lownav />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;

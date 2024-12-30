import React, { useState, useEffect } from 'react';
import "./lownav.css"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const Lownav = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const texts = [
      "Buy More, Save More! Flat 5% OFF on Orders ₹10,000+ | Code: SAVE5  ",
      "🚗 Free Shipping on All Orders ! | 📲 Need Assistance ? Call At +918619448841",
      "Buy 5, Save More! Flat 15% OFF on Orders ₹10,000+ | Code: SAVE51 ",
      "Flat 5% OFF on NFS Cards | Code: SAVE58 ",
      "Join our community 🤝"
    ];
  
    const nextText = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };
  
    const prevText = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
    };
  return (
    <>
    <div className="hanger">
        <p className="item">View all</p>
        <p className="item">Visiting Cards</p>
        <p className="item">Stationary,Letterheads & Notebooks</p>
        <p className="item">Personalized Pens</p>
        <p className="item">Stamps & Inks</p>
        <p className="item">Signs, Posters & Marketing Materials</p>
        <p className="item">Labels, Stickers & Packaging</p>
        <p className="item">Custom Clothing, Caps & Bags</p>
        <p className="item">Photo Gifts</p>
        <p className="item">Calendar,Diaries& NoteBooks</p>
        <p className="item">Custom Winter Wear</p>
    </div>
    <div className="carousel">
        <button className="carousel-button" onClick={prevText}  onMouseEnter={prevText} style={{textAlign:"start"}}><GrFormPrevious /></button>
          <div className="carousel-text">
            {texts[currentIndex]}
          </div>
        <button className="carousel-button" onClick={nextText} onMouseEnter={nextText} style={{textAlign:"end"}}><MdNavigateNext /></button>
    </div>
    </>
  );
}

export default Lownav;
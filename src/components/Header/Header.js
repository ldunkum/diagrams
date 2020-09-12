import React from 'react';
import './Header.css';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className="App-header">
      <div className="container brand">
        <Navigation />
        <span className="brandTxt">Interaktive</span> Diagramme
      </div>
    </div>
  );
}

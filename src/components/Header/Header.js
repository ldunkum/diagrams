import React from 'react';
import './Header.css';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className="App-header">
      <div className="container">
        <Navigation />
        <span className="brandTxt">AB</span> Diagramme
      </div>
    </div>
  );
}

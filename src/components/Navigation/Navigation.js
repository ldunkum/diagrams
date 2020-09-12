import React from 'react';
import {
  Link
} from "react-router-dom";
import './Navigation.css';


export default function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/">Statisch</Link>
      <Link to="/interaktiv">Interaktiv</Link>
    </div>
  );
}

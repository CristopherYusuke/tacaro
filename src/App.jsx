import React, { useState } from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.sass';


function App() {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <>
      <div className="hero is-info">
        <div className="hero-body">
          <button type="button" className="button" onClick={() => setHideMenu(!hideMenu)}>
            <i className="fas fa-bars fa-lg" />
          </button>
          <div className="container">
            <h1 className="title">
            TaCaro App
            </h1>
            <h2 className="subtitle">
            application to see how expensive is based on salary and another stuffs
            </h2>
          </div>
        </div>
      </div>
      { hideMenu && (
        <aside className="menu">
          <p className="menu-label">
          nada a teste
          </p>
          <ul className="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p className="menu-label">
          teste
          </p>
        </aside>
      )}

    </>
  );
}

export default App;

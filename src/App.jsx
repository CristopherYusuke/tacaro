import React, { useState } from 'react';
import './App.sass';
import SideMenu from './component/side-menu';

function App() {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <>
      <header>
        <button type="button" className="button" onClick={() => setHideMenu(!hideMenu)}>
          <i className="fas fa-bars fa-lg" />
        </button>
        ta caro
      </header>
      { hideMenu && (
        <SideMenu />
      )}
    </>
  );
}

export default App;

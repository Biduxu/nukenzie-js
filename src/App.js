import { useState } from 'react';

import './App.css';

import {LandingPageButton} from './pages/landing-page/ButtonLanding';
import {TransationPage} from './pages/TransationsPage/TransationPage'

function App() {

  const [pageTransation, setPageTransation] = useState(false)

  return (
    <div className="App">
      <div className="App-content">
        {pageTransation === true ? (
          <TransationPage setPageTransation={setPageTransation}/>
        ):(
          <LandingPageButton setPageTransation={setPageTransation}/>
        )}
      </div>
    </div>
  );
}

export default App;

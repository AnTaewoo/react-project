import React,{useContext} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import AuthContext from './context/AuthContext';

function App() {
  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      {ctx.isModalOn && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;

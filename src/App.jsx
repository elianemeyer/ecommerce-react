
import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./app.css";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <header className="App-header">
                <NavBar />
              </header>
              <Routes>
                <Route 
                  path="/"
                  element={
                    <ItemListContainer greeting="🌿🌼 Welcome to Nature Mission 🌼​🌿" />
                  }
                />
                
                <Route 
                  path="/category/:categoryID"
                  element={
                    <ItemListContainer />
                  }
                />

                <Route 
                  path="/item/:id"
                  element={
                    <ItemDetailContainer />
                  }
                />

                <Route 
                path="/*" 
                element={<h1>Error 404</h1>}
                />

              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
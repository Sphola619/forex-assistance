import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [selectedPair, setSelectedPair] = useState(null);
  
  {/* List of assets */}
  const assets = ["USDZAR", "EURZAR", "USDCHF", "EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD", "XAG/USD"];

  return (
    <>
      <h1>Forex Assistance</h1>

      <div>
        {assets.map((asset) => (
          <div
            key={asset}
            onClick={() => setSelectedPair(asset)}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "500px"
            }}
          >
            {asset}
          </div>
        ))}
      </div>

      {selectedPair && <h2>Selected: {selectedPair}</h2>}
    </>
  );
}

export default App;
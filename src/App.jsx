import React, { useState } from 'react'
import './App.css'

function App() {
  const [selectedPair, setSelectedPair] = useState(null);

  const assets = [
    { symbol: "USDZAR", name: "US Dollar / South African Rand" },
    { symbol: "EURZAR", name: "Euro / South African Rand" },
    { symbol: "USDCHF", name: "US Dollar / Swiss Franc" },
    { symbol: "EUR/USD", name: "Euro / US Dollar" },
    { symbol: "GBP/USD", name: "British Pound / US Dollar" },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen" },
    { symbol: "XAU/USD", name: "Gold / US Dollar" },
    { symbol: "XAG/USD", name: "Silver / US Dollar" },
  ];

  return (
    <main className="app-shell">
      <h1>Forex Assistance</h1>

      <section className="asset-grid">
        {assets.map((asset) => (
          <button
            key={asset.symbol}
            type="button"
            className={`asset-card${selectedPair === asset.symbol ? " asset-card--active" : ""}`}
            onClick={() => setSelectedPair(asset.symbol)}
          >
            <div className="asset-card__top">
              <div>
                <p className="asset-card__symbol">{asset.symbol}</p>
                <p className="asset-card__name">{asset.name}</p>
              </div>

              <div className="asset-card__price-block">
                <span className="asset-card__price">--</span>
                <span className="asset-card__change">--</span>
              </div>
            </div>

            <div className="asset-card__footer">
              <span>Bid --</span>
              <span>Ask --</span>
              <span>High --</span>
              <span>Low --</span>
            </div>
          </button>
        ))}
      </section>

      {selectedPair && <h2 className="selected-pair">Selected: {selectedPair}</h2>}
    </main>
  );
}

export default App;

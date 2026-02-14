import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Zakat.css";

function Zakat() {
  const [assets, setAssets] = useState("");
  const [liabilities, setLiabilities] = useState("");
  const [result, setResult] = useState(null);

  const calculateZakat = () => {
    const net = Number(assets) - Number(liabilities);
    if (net > 0) {
      setResult((net * 0.025).toFixed(2));
    } else {
      setResult(0);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="zakat-hero">
        <div className="container">
          <h1>Zakat Calculator</h1>
          <p>
            Fulfill your sacred obligation with clarity. Calculate your Zakat
            accurately and responsibly.
          </p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="zakat-info-section">
        <div className="container">
          <h2>Understanding Zakat</h2>
          <p>
            Zakat is 2.5% of your eligible wealth after deducting liabilities.
            It purifies your wealth and strengthens the community.
          </p>
        </div>
      </section>

      {/* WEALTH CATEGORIES */}
      <section className="wealth-grid">
        <div className="container grid">
          <div className="wealth-card">Cash & Savings</div>
          <div className="wealth-card">Gold & Silver</div>
          <div className="wealth-card">Business Assets</div>
          <div className="wealth-card">Investments</div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="calculator-section">
        <div className="calculator-card">
          <h3>Calculate Your Zakat</h3>

          <div className="input-group">
            <label>Total Assets (₹)</label>
            <input
              type="number"
              value={assets}
              onChange={(e) => setAssets(e.target.value)}
              placeholder="Enter total assets"
            />
          </div>

          <div className="input-group">
            <label>Total Liabilities (₹)</label>
            <input
              type="number"
              value={liabilities}
              onChange={(e) => setLiabilities(e.target.value)}
              placeholder="Enter liabilities"
            />
          </div>

          <button onClick={calculateZakat}>Calculate</button>

          {result !== null && (
            <div className="result-card">
              <h4>Your Zakat Due</h4>
              <p>₹ {result}</p>
            </div>
          )}
        </div>
      </section>

      {/* REMINDER */}
      <section className="zakat-reminder">
        <div className="container">
          <p>
            “And establish prayer and give zakah…” — Surah Al-Baqarah (2:43)
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Zakat;

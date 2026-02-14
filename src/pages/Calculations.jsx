import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/calculations.css";

function Calculations() {
  return (
    <>
      <Navbar />

      <section className="calc-hero">
        <div className="calc-hero-content">
          <h1>Islamic Calculations & Life Tools</h1>
          <p>
            Sakinah provides spiritually aligned calculation tools rooted in
            authentic Islamic principles — helping you manage wealth, family,
            obligations, and sacred responsibilities with clarity and
            confidence.
          </p>
        </div>
      </section>

      <section className="calc-grid-section">
        <div className="calc-grid">

          <Link to="/calculations/zakat" className="calc-card">
            <div className="icon-wrapper gold">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/>
              </svg>
            </div>
            <h3>Zakat Calculator</h3>
            <p>
              Accurately calculate your annual Zakat obligations with ease and
              transparency.
            </p>
            <img
              src="https://images.unsplash.com/photo-1607083206173-7f9a6fa2c5c0"
              alt="Zakat"
            />
          </Link>

          <Link to="/calculations/fitrah" className="calc-card">
            <div className="icon-wrapper green">
              <svg viewBox="0 0 24 24">
                <path d="M3 12l9-9 9 9-9 9-9-9z"/>
              </svg>
            </div>
            <h3>Fitrah Calculator</h3>
            <p>
              Calculate Sadaqat al-Fitr properly for Ramadan with clarity and
              confidence.
            </p>
            <img
              src="https://images.unsplash.com/photo-1589987607627-74a7a3873a90"
              alt="Fitrah"
            />
          </Link>

          <Link to="/calculations/inheritence" className="calc-card">
            <div className="icon-wrapper gold">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z"/>
              </svg>
            </div>
            <h3>Inheritance</h3>
            <p>
              Structured Islamic inheritance distribution according to Shariah
              guidelines.
            </p>
            <img
              src="https://images.unsplash.com/photo-1581091012184-5c8b8d45e4d3"
              alt="Inheritance"
            />
          </Link>

          <Link to="/calculations/iddat" className="calc-card">
            <div className="icon-wrapper green">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
              </svg>
            </div>
            <h3>Iddat Period</h3>
            <p>
              Determine the sacred waiting period with precise calculation and
              calendar guidance.
            </p>
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
              alt="Iddat"
            />
          </Link>

          <Link to="/calculations/aqiqah" className="calc-card">
            <div className="icon-wrapper gold">
              <svg viewBox="0 0 24 24">
                <path d="M12 4l6 16H6L12 4z"/>
              </svg>
            </div>
            <h3>Aqiqah</h3>
            <p>
              Calculate the recommended Aqiqah date and Sunnah guidelines with
              simplicity.
            </p>
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              alt="Aqiqah"
            />
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Calculations;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../css/MasajidTimings.css";
import { FaMap } from "react-icons/fa";

 
const masajid = [
  {
    name: "Mohammadi Masjid",
    address:
      "Barah, Noor Mahal Rd, Khwaspura, Niyamatpura, Shahjahanabad, Bhopal, Madhya Pradesh 462001",
    timings: {
      Fajr: "6:40 am",
      Zuhr: "2:00 pm",
      Asr: "4:30 pm",
      Maghrib: "5:50 pm",
      Isha: "7:30 pm",
      "Juma'ah": "1:30 pm",
    },
  },
  {
    name: "Masjid Jaan Bi Sahiba",
    address:
      "37, Thana Rd, Kali Basti, Peer Gate Area, Bhopal, Madhya Pradesh 462001",
    timings: {
      Fajr: "6:00 am",
      Zuhr: "12:50 pm",
      Asr: "4:15 pm",
      Maghrib: "5:50 pm",
      Isha: "7:20 pm",
      "Juma'ah": "1:30 pm",
    },
  },
];

function MasajidTimings() {
  return (
    <>
      <Navbar />

      <section className="masajid-page">
        <h1 className="page-title">Mosque Timings – Bhopal</h1>

        <div className="masajid-grid">
          {masajid.map((masjid, index) => (
            <div className="masjid-card" key={index}>
              <div className="masjid-header">
                <h2>{masjid.name}</h2>
                <div className="address-container">
                  <div className="address">
                    <FaMapMarkerAlt />
                    <span>{masjid.address}</span>
                  </div> 

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      masjid.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMap className="map-icon" title="Open in Google Maps" />
                  </a>
                </div>
              </div>

              <div className="timings">
                <h3>
                  <FaClock /> Salah Times
                </h3>

                <ul>
                  {Object.entries(masjid.timings).map(([name, time]) => (
                    <li key={name}>
                      <span className="salah-name">{name}</span>
                      <span className="salah-time">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MasajidTimings;

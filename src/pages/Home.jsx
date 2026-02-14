 
import Navbar from "../components/Navbar";
import PrayerCard from "../components/PrayerCard";
import Calendar from "../components/Calendar";
import QuranSection from "../components/QuranSection";
import HeroSection from "../components/HeroSection";
// import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer";
import "../css/Home.css";
import { useState } from "react";
import { useLocation } from "../hooks/useLocation"; 
import { usePrayerTimes } from "../hooks/uesPrayerTimes";

function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());

  const { coords } = useLocation();
  const { data, loading } = usePrayerTimes(selectedDate, coords);
  return (
    <div>
      <Navbar />
      <div className="landingpage">
        

        <div className="landing-content">
          <div className="allah-symbol">ﷲ</div>
          <h1 className="hero-quote">
            "AND HOLD FIRMLY TO THE ROPE OF ALLAH ALL TOGETHER AND DO NOT BECOME
            DIVIDED"
          </h1>
          <p className="verse-reference">Surah Al-Imran, Verse 103</p>
          <a href="#join" className="btn btn-primary">
            Join Our Community
          </a>
        </div>
      </div>

      <section className="combined-section">
        <PrayerCard selectedDate={selectedDate} />

        <Calendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </section>

      <QuranSection />
      <HeroSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <JoinUsSection />

      <div className="content-spacer"></div>
      <Footer />
    </div>
  );
}

export default Home;

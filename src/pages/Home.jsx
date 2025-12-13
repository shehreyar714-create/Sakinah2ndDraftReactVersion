import Navbar from '../components/Navbar'
import PrayerCard from '../components/PrayerCard'
import Calendar from '../components/Calendar'
import QuranSection from '../components/QuranSection'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import JoinUsSection from '../components/JoinUsSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="landingpage">
      <Navbar />
      
      <main>
        <div className="landing-content">
          <div className="allah-symbol">ﷲ</div>
          <h1 className="hero-quote">
            "AND HOLD FIRMLY TO THE ROPE OF ALLAH ALL TOGETHER AND DO NOT BECOME DIVIDED"
          </h1>
          <p className="verse-reference">Surah Al-Imran, Verse 103</p>
          <a href="#join" className="btn btn-primary">Join Our Community</a>
        </div>

        <section className="combined-secton">
          <PrayerCard />
          <Calendar />
        </section>

        <QuranSection />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <JoinUsSection />
      </main>

      <div className="content-spacer"></div>
      <Footer />
    </div>
  )
}

export default Home

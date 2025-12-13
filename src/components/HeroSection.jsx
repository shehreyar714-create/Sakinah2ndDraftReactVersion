import { useEffect } from 'react'
import "../css/Home.css"

function HeroSection() {
  useEffect(() => {
    const exploreLink = document.querySelector('.explore-link')
    
    const handleClick = (e) => {
      e.preventDefault()
      const target = document.querySelector(e.target.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (exploreLink) {
      exploreLink.addEventListener('click', handleClick)
    }

    return () => {
      if (exploreLink) {
        exploreLink.removeEventListener('click', handleClick)
      }
    }
  }, [])

  return (
    <section className="banner-area">
      <div className="animated-backdrop">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="main-wrapper">
        <h1 className="primary-heading">
          Islamic Guidance & Essential Calculations
        </h1>
        <p className="tagline">
          Accurate prayer times, zakat, fitra, inheritance, and iddah
          calculations — all in one place to help you practice with ease and
          confidence.
        </p>
        <a href="#services" className="explore-link">Discover Our Services</a>

        <div className="feature-cards">
          <div className="info-card">
            <div className="card-icon">🕌</div>
            <h3 className="card-title">Prayer Times</h3>
            <p className="card-description">
              Precise salah schedules for your location
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">💰</div>
            <h3 className="card-title">Zakat & Fitra</h3>
            <p className="card-description">
              Calculate your charitable obligations
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Inheritance</h3>
            <p className="card-description">
              Islamic inheritance distribution tools
            </p>
          </div>
          <div className="info-card">
            <div className="card-icon">📅</div>
            <h3 className="card-title">Iddah Period</h3>
            <p className="card-description">Track waiting period calculations</p>
          </div>
        </div>
      </div>

      <div className="decorative-line"></div>
    </section>
  )
}

export default HeroSection
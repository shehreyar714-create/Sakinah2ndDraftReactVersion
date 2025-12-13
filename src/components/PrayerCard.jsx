import { useState, useEffect } from 'react'
import "../css/Home.css"

function PrayerCard() {
  const [locationName, setLocationName] = useState('Loading...')
  const [gregorianDate, setGregorianDate] = useState('')
  const [hijriDate, setHijriDate] = useState('')
  const [locationInput, setLocationInput] = useState('')

  useEffect(() => {
    loadPrayerTimes()
    updateDates()
  }, [])

  const loadPrayerTimes = () => {
    // TODO: Implement prayer times API call
    setLocationName('Bhopal, Madhya Pradesh')
  }

  const updateDates = () => {
    const now = new Date()
    setGregorianDate(now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }))
    setHijriDate('Hijri Date')
  }

  const searchLocation = () => {
    console.log('Searching for:', locationInput)
  }

  return (
    <section className="prayer-card-container">
      <div className="container">
        <div className="topcontainer">
          <div className="leftside">
            <p className="miniheading">Prayer Times in</p>
            <h1 id="locationName">{locationName}</h1>
          </div>
          <div className="rightside">
            <div id="gregorianDate">{gregorianDate}</div>
            <div id="hijriDate">{hijriDate}</div>
          </div>
        </div>

        <div className="bottomcontainer">
          <div className="search-box">
            <input 
              id="locationInput" 
              type="text" 
              placeholder="Type your location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            <button onClick={searchLocation}>Search</button>
          </div>

          <div className="top-info">
            <div className="badge" id="calcMethod"></div>
            <div className="badge" id="imsakSunrise"></div>
          </div>
        </div>

        <div className="times-grid" id="timesGrid"></div>
      </div>
    </section>
  )
}

export default PrayerCard
import { useState, useEffect } from 'react'
import "../css/Home.css"

function PrayerCard() {
  const [locationName, setLocationName] = useState('Loading...')
  const [gregorianDate, setGregorianDate] = useState('')
  const [hijriDate, setHijriDate] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [calcMethod, setCalcMethod] = useState('')
  const [imsakSunrise, setImsakSunrise] = useState('')
  const [prayerTimes, setPrayerTimes] = useState([])
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    fetchPrayerTimes('Kallakurichi', 'India')
  }, [])

  const fetchPrayerTimes = async (city = 'Kallakurichi', country = 'India') => {
    try {
      const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
      const res = await fetch(url)
      const data = await res.json()

      const times = data.data.timings
      const date = data.data.date

      setLocationName(`${city}, ${country}`)
      setGregorianDate(`${date.gregorian.weekday.en}, ${date.gregorian.date} ${date.gregorian.month.en} ${date.gregorian.year}`)
      setHijriDate(`${date.hijri.date} ${date.hijri.month.en} ${date.hijri.year}`)
      setCalcMethod(data.data.meta.method.name)
      setImsakSunrise(`Imsak ${times.Imsak} | Sunrise ${times.Sunrise}`)

      renderPrayerCards(times)
    } catch (e) {
      console.log('Error fetching:', e)
    }
  }

  const renderPrayerCards = (times) => {
    const order = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    let nextPrayer = null

    order.forEach((name) => {
      let t = times[name].trim()
      let [h, m] = t.split(':').map(Number)
      let minutes = h * 60 + m

      if (minutes > currentMinutes && nextPrayer === null) {
        nextPrayer = name
      }
    })

    const cards = order.map((name) => ({
      name,
      time: times[name],
      isNext: name === nextPrayer
    }))

    setPrayerTimes(cards)

    if (nextPrayer) {
      startCountdown(times[nextPrayer])
    }
  }

  const startCountdown = (timeStr) => {
    const tick = () => {
      let now = new Date()
      let [h, m] = timeStr.trim().split(':').map(n => parseInt(n))
      let target = new Date()
      target.setHours(h, m, 0, 0)

      let diff = target - now
      if (diff <= 0) {
        setCountdown("It's time!")
        return
      }

      let hrs = Math.floor(diff / 3600000)
      let mins = Math.floor((diff % 3600000) / 60000)
      let secs = Math.floor((diff % 60000) / 1000)

      setCountdown(`in ${hrs}h ${mins}m ${secs}s`)
      setTimeout(tick, 1000)
    }
    tick()
  }

  const searchLocation = () => {
    if (!locationInput.trim()) return
    fetchPrayerTimes(locationInput, 'India')
  }

  return (
    <section className="prayer-card-container">
      <div className="container">
        <div className="topcontainer">
          <div className="leftside">
            <p className="miniheading">Prayer Times in</p>
            <h1>{locationName}</h1>
          </div>
          <div className="rightside">
            <div id='gregorianDate'>{gregorianDate}</div>
            <div id='hijriDate'>{hijriDate}</div>
          </div>
        </div>

        <div className="bottomcontainer">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Type your location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
            />
            <button onClick={searchLocation}>Search</button>
          </div>

          <div className="top-info">
            <div className="badge">{calcMethod}</div>
            <div className="badge">{imsakSunrise}</div>
          </div>
        </div>

        <div className="times-grid">
          {prayerTimes.map((prayer, index) => (
            <div key={index} className={`card ${prayer.isNext ? 'next' : ''}`}>
              {prayer.isNext && <div className="next-label">Next</div>}
              <div>{prayer.name}</div>
              <div style={{ fontSize: '35px', marginTop: '10px' }}>{prayer.time}</div>
              {prayer.isNext && <div className="countdown">{countdown}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrayerCard
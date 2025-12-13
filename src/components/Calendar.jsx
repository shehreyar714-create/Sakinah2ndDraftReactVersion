import "../css/Home.css"

import { useState, useEffect } from 'react'

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    generateCalendar()
  }, [currentDate])

  const generateCalendar = () => {
    // TODO: Implement calendar generation logic
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
    setSelectedDate(new Date())
  }

  return (
    <section className="calender-container">
      <div className="calendar-container">
        <div className="header">
          <div className="month-nav">
            <button className="nav-btn" onClick={prevMonth}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="month-display">
              <div className="gregorian-month" id="gregorianMonth">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <div className="hijri-month" id="hijriMonth">Hijri Month</div>
            </div>
            <button className="nav-btn" onClick={nextMonth}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="selected-date-box">
            <div className="selected-label">Selected Date</div>
            <div className="selected-gregorian" id="selectedGregorian">
              {selectedDate.toLocaleDateString()}
            </div>
            <div className="selected-hijri" id="selectedHijri">Hijri Date</div>
          </div>
        </div>

        <div className="calendar-body">
          <div className="day-headers">
            <div className="day-header">Sun</div>
            <div className="day-header">Mon</div>
            <div className="day-header">Tue</div>
            <div className="day-header">Wed</div>
            <div className="day-header">Thu</div>
            <div className="day-header">Fri</div>
            <div className="day-header">Sat</div>
          </div>

          <div className="calendar-grid" id="calendarGrid"></div>

          <div className="footer">
            <button className="today-btn" onClick={goToToday}>Today</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendar
import { useState, useEffect } from 'react'
import "../css/Home.css"


function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [calendarDays, setCalendarDays] = useState([])
  const today = new Date()

  const hijriMonths = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',
    'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah'
  ]

  const gregorianMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const gregorianToHijri = (date) => {
    const formatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })

    const parts = formatter.formatToParts(date)
    let hDay = parseInt(parts.find(p => p.type === 'day').value)
    let hMonth = parseInt(parts.find(p => p.type === 'month').value)
    let hYear = parseInt(parts.find(p => p.type === 'year').value)

    return { day: hDay, month: hMonth, year: hYear }
  }

  const formatDate = (date, isHijri = false) => {
    if (isHijri) {
      const hijri = gregorianToHijri(date)
      return `${hijri.day} ${hijriMonths[hijri.month - 1]} ${hijri.year}`
    } else {
      return `${date.getDate()} ${gregorianMonths[date.getMonth()]} ${date.getFullYear()}`
    }
  }

  useEffect(() => {
    generateCalendar()
  }, [currentDate])

  const generateCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const prevMonthDays = new Date(year, month, 0).getDate()

    const days = []

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = new Date(year, month - 1, day)
      days.push({ date, isOtherMonth: true })
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      days.push({ date, isOtherMonth: false })
    }

    // Next month days
    const remainingCells = 42 - (firstDay + daysInMonth)
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day)
      days.push({ date, isOtherMonth: true })
    }

    setCalendarDays(days)
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

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  const hijri = gregorianToHijri(new Date(currentDate.getFullYear(), currentDate.getMonth(), 15))
  const isToday = selectedDate.toDateString() === today.toDateString()

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
              <div className="gregorian-month">
                {gregorianMonths[currentDate.getMonth()]} {currentDate.getFullYear()}
              </div>
              <div className="hijri-month">{hijriMonths[hijri.month - 1]} {hijri.year}</div>
            </div>
            <button className="nav-btn" onClick={nextMonth}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="selected-date-box">
            <div className="selected-label">Selected Date</div>
            <div className="selected-gregorian">{formatDate(selectedDate)}</div>
            <div className="selected-hijri">{formatDate(selectedDate, true)}</div>
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

          <div className="calendar-grid">
            {calendarDays.map((day, index) => {
              const hijriDate = gregorianToHijri(day.date)
              const isTodayDate = day.date.toDateString() === today.toDateString()
              const isSelected = day.date.toDateString() === selectedDate.toDateString()

              return (
                <div
                  key={index}
                  className={`calendar-day ${day.isOtherMonth ? 'other-month' : ''} ${isTodayDate ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleDateClick(day.date)}
                >
                  <div className="gregorian-date">{day.date.getDate()}</div>
                  <div className="hijri-date">{hijriDate.day}</div>
                </div>
              )
            })}
          </div>

          <div className="footer">
            <button className={`today-btn ${!isToday ? 'active' : ''}`} onClick={goToToday}>
              Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calendar

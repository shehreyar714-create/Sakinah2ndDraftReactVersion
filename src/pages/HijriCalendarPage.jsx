import HijriCalendar from '../components/HijriCalendar'

export default function HijriCalendarPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-secondary)',
      padding: '2rem 1.25rem 4rem',
    }}>
      {/* Page header */}
      <div style={{ maxWidth: '28rem', margin: '0 auto 2rem' }}>
        <p style={{
          fontFamily: "'Scheherazade New', serif",
          fontSize: '1.4rem',
          color: 'var(--text-gold)',
          marginBottom: '0.25rem'
        }}>
          التقويم الهجري
        </p>
        <h1 style={{
          fontFamily: "'Amiri', serif",
          fontSize: '2.2rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.375rem'
        }}>
          Hijri Calendar
        </h1>
        <p style={{
          fontFamily: "'Tajawal', sans-serif",
          fontSize: '0.95rem',
          color: 'var(--text-tertiary)'
        }}>
          Dates calculated from astronomical moon data.
          Confirmed months are verified · Tentative months are estimates.
        </p>
      </div>

      {/* Calendar */}
      <HijriCalendar />
    </div>
  )
}
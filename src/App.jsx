import Home from './pages/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import MasajidTimings from './pages/MasajidTiminigs'
import Calculations from './pages/Calculations'
import AboutUs from './pages/AboutUs'
import JoinUs from './pages/JoinUs'

import Zakat from './pages/Zakat'
import Fitrah from './pages/Fitrah'
import Inheritence from './pages/Inheritence'
import Iddat from './pages/Iddat'
import Aqiqah from './pages/Aqiqah'

import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import PersonalCalendar from './pages/PersonalCalendar'
import HijriCalendarPage from './pages/HijriCalendarPage'

function App() {
  return (
    <main className="main-content">
      <Routes>

        {/* Public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/masajidtimings' element={<MasajidTimings />} />
        <Route path='/calculations' element={<Calculations />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/joinus' element={<JoinUs />} />

        <Route path='/calculations/zakat' element={<Zakat />} />
        <Route path='/calculations/fitrah' element={<Fitrah />} />
        <Route path='/calculations/inheritence' element={<Inheritence />} />
        <Route path='/calculations/iddat' element={<Iddat />} />
        <Route path='/calculations/aqiqah' element={<Aqiqah />} />

        {/* Auth routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


        <Route path='/calendar' element={
          <ProtectedRoute><PersonalCalendar /></ProtectedRoute>
        } />
        <Route path='/hijri-calendar' element={<HijriCalendarPage />} />
      </Routes>
    </main>
  )
}

export default App
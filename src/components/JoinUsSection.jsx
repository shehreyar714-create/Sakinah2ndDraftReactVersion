import { useState } from 'react'

import "../css/Home.css"

function JoinUsSection() {
  const [activeTab, setActiveTab] = useState('register')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log('Register:', formData)
  }

  const handleSignInSubmit = (e) => {
    e.preventDefault()
    console.log('Sign In:', formData)
  }

  return (
    <section className="community-section">
      <div className="membership-wrapper">
        <div className="info-panel">
          <h2 className="heading-primary">Join Our Community</h2>
          <p className="description-text">
            Become part of our growing Muslim community and get free access to
            accurate prayer times, zakat, fitra, inheritance and iddah
            calculations, along with other helpful Islamic resources.
          </p>
          <ul className="benefits-list">
            <li>Accurate prayer times for your location</li>
            <li>Zakat & Fitra calculators</li>
            <li>Inheritance calculation tools</li>
            <li>Iddah period tracker</li>
            <li>Islamic resources & guidance</li>
          </ul>
        </div>

        <div className="forms-panel">
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === 'register' ? 'selected' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Sign Up
            </button>
            <button 
              className={`tab-button ${activeTab === 'signin' ? 'selected' : ''}`}
              onClick={() => setActiveTab('signin')}
            >
              Login
            </button>
          </div>

          <form 
            className={`registration-form ${activeTab === 'register' ? 'visible' : ''}`}
            onSubmit={handleRegisterSubmit}
          >
            <div className="input-wrapper">
              <label htmlFor="user-fullname" className="field-label">Full Name</label>
              <input 
                type="text" 
                id="user-fullname" 
                name="name" 
                className="text-input" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="user-email" className="field-label">Email Address</label>
              <input 
                type="email" 
                id="user-email" 
                name="email" 
                className="text-input"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="user-org" className="field-label">Community/Organization (optional)</label>
              <input 
                type="text" 
                id="user-org" 
                name="company" 
                className="text-input"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="user-pass" className="field-label">Password</label>
              <input 
                type="password" 
                id="user-pass" 
                name="password" 
                className="text-input"
                value={formData.password}
                onChange={handleInputChange}
                required 
              />
            </div>
            <button type="submit" className="action-button">
              Create Account
            </button>
          </form>

          <form 
            className={`registration-form ${activeTab === 'signin' ? 'visible' : ''}`}
            onSubmit={handleSignInSubmit}
          >
            <div className="input-wrapper">
              <label htmlFor="member-email" className="field-label">Email Address</label>
              <input 
                type="email" 
                id="member-email" 
                name="email" 
                className="text-input"
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="member-pass" className="field-label">Password</label>
              <input 
                type="password" 
                id="member-pass" 
                name="password" 
                className="text-input"
                onChange={handleInputChange}
                required 
              />
            </div>
            <button type="submit" className="action-button">Sign In</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection
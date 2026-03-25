import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signUp } from '../lib/auth'

export default function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup(e) {
    e.preventDefault()
    setError('')
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setLoading(true)
    try {
      await signUp(email, password, name)
      setSuccess('Account created! Check your email to confirm before logging in.')
    } catch (err) {
      setError(err.message || 'Sign up failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          <span className="allah-symbol" style={{ fontSize: '2.5rem' }}>ﷲ</span>
          <h2 className="auth-brand">Sakinah</h2>
        </div>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Join the Sakinah community</p>

        {error && <p className="form-error">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        {!success && (
          <form onSubmit={handleSignup}>
            <div className="input-wrapper">
              <label className="field-label" htmlFor="name">Display name</label>
              <input
                id="name"
                className="text-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div className="input-wrapper">
              <label className="field-label" htmlFor="email">Email</label>
              <input
                id="email"
                className="text-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="input-wrapper">
              <label className="field-label" htmlFor="password">Password</label>
              <input
                id="password"
                className="text-input"
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="input-wrapper">
              <label className="field-label" htmlFor="confirm">Confirm password</label>
              <input
                id="confirm"
                className="text-input"
                type="password"
                placeholder="Repeat password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="action-button" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
        )}

        {success && (
          <button className="action-button" onClick={() => navigate('/login')}>
            Go to login
          </button>
        )}

        {!success && (
          <p className="auth-footer-text">
            Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { signIn, signInWithGoogle, resetPassword } from '../lib/auth'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [mode, setMode] = useState('login') // 'login' | 'forgot'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setError('')
    try {
      await signInWithGoogle()
      // Supabase redirects automatically — no navigate() needed here
    } catch (err) {
      setError(err.message || 'Google sign-in failed.')
    }
  }

  async function handleForgot(e) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      await resetPassword(email)
      setSuccess('Password reset email sent. Check your inbox.')
    } catch (err) {
      setError(err.message || 'Could not send reset email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* Logo / brand */}
        <div className="auth-logo">
          <span className="allah-symbol" style={{ fontSize: '2.5rem' }}>ﷲ</span>
          <h2 className="auth-brand">Sakinah</h2>
        </div>

        {mode === 'login' ? (
          <>
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">Sign in to access your personal dashboard</p>

            {error && <p className="form-error">{error}</p>}

            <form onSubmit={handleLogin}>
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
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>

              <button
                type="button"
                className="auth-link-btn"
                onClick={() => setMode('forgot')}
              >
                Forgot password?
              </button>

              <button type="submit" className="action-button" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <div className="auth-divider"><span>or</span></div>

            <button className="google-btn" onClick={handleGoogle} type="button">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.185l-2.908-2.258c-.806.54-1.836.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.583c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.462.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.583 9 3.583z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="auth-footer-text">
              Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
            </p>
          </>
        ) : (
          <>
            <h1 className="auth-title">Reset password</h1>
            <p className="auth-subtitle">Enter your email and we'll send a reset link</p>

            {error && <p className="form-error">{error}</p>}
            {success && <p className="success-text">{success}</p>}

            <form onSubmit={handleForgot}>
              <div className="input-wrapper">
                <label className="field-label" htmlFor="reset-email">Email</label>
                <input
                  id="reset-email"
                  className="text-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="action-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </form>

            <button
              type="button"
              className="auth-link-btn"
              style={{ marginTop: '1rem' }}
              onClick={() => { setMode('login'); setError(''); setSuccess('') }}
            >
              ← Back to login
            </button>
          </>
        )}
      </div>
    </div>
  )
}

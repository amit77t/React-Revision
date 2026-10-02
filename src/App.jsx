
import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Daylight home">
          <span className="brand-mark" aria-hidden="true">d</span>
          <span>daylight</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Why Daylight</a>
          <a href="#how-it-works">How it works</a>
          <a href="#stories">Stories</a>
        </nav>

        <a className="header-cta" href="#get-started">
          Get started <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A little more room to think</div>
          <h1>Make space for your <span>best work.</span></h1>
          <p className="hero-description">
            Your plans, priorities, and big ideas—together at last. Daylight helps you find a calmer rhythm and make progress that feels good.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#get-started">Find your flow <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#how-it-works"><span className="play-icon" aria-hidden="true">▶</span> See how it works</a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-one">A</span>
              <span className="avatar avatar-two">J</span>
              <span className="avatar avatar-three">M</span>
              <span className="avatar avatar-four">S</span>
            </div>
            <p><strong>12,000+</strong> thoughtful people<br />are finding their flow</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Preview of the Daylight planning app">
          <div className="sun-shape" aria-hidden="true" />
          <div className="sparkle sparkle-one" aria-hidden="true">✳</div>
          <div className="sparkle sparkle-two" aria-hidden="true">✳</div>
          <div className="app-window">
            <div className="app-sidebar">
              <div className="mini-brand"><span className="brand-mark">d</span><span>daylight</span></div>
              <div className="sidebar-label">YOUR SPACE</div>
              <div className="sidebar-item active"><span>◷</span> Today</div>
              <div className="sidebar-item"><span>▦</span> Projects</div>
              <div className="sidebar-item"><span>⌑</span> Notes</div>
              <div className="sidebar-bottom"><span className="tiny-avatar">J</span><span>Jamie Parker</span><span>···</span></div>
            </div>
            <div className="app-content">
              <div className="app-topline"><span>MONDAY, OCTOBER 12</span><span className="weather">☀ &nbsp; 72°</span></div>
              <h2>Good morning, Jamie <span>✦</span></h2>
              <p className="app-subtitle">A fresh week. Let’s make it count.</p>
              <div className="focus-card">
                <div className="focus-top"><span className="focus-label">YOUR ONE THING</span><span className="focus-menu">···</span></div>
                <div className="focus-task"><span className="check-circle" /> Finish the first draft</div>
                <div className="focus-footer"><span className="tag">Studio refresh</span><span>↗ &nbsp; Deep work</span></div>
              </div>
              <div className="tasks-heading"><strong>Coming up</strong><span>View day →</span></div>
              <div className="task-row"><span className="task-time">10:30</span><span className="task-color coral" /><span>Weekly team sync</span><span className="task-duration">30 min</span></div>
              <div className="task-row"><span className="task-time">1:00</span><span className="task-color green" /><span>Lunch outside</span><span className="task-duration">1 hour</span></div>
              <div className="task-row"><span className="task-time">3:15</span><span className="task-color purple" /><span>Sketch new ideas</span><span className="task-duration">45 min</span></div>
              <div className="progress-card"><span className="progress-icon">✦</span><span><strong>You’re finding your rhythm</strong><small>3 focused days this week</small></span><span className="progress-ring">3</span></div>
            </div>
          </div>
          <div className="floating-note"><span className="note-sparkle">✦</span><span>A little progress<br /><strong>is still progress.</strong></span></div>
        </div>
      </section>

      <section className="trust-strip" id="stories">
        <p>MADE FOR PEOPLE WHO CARE ABOUT THE WORK</p>
        <div className="trust-logos" aria-label="Teams using Daylight">
          <span className="logo-word logo-serif">goodkind</span>
          <span className="logo-word logo-spaced">COMMON&nbsp; ROOM</span>
          <span className="logo-word logo-bold">ordinary®</span>
          <span className="logo-word logo-serif">Sunday Studio</span>
          <span className="logo-word logo-spaced">KINFIELD</span>
        </div>
      </section>

      <section className="features section-shell" id="features">
        <div className="section-heading">
          <div className="eyebrow"><span className="eyebrow-dot" /> Less busy, more brilliant</div>
          <h2>A softer way to<br />get things <span>done.</span></h2>
          <p>Good work doesn’t need more hustle. It needs a little clarity, a little space, and a plan that works for you.</p>
        </div>
        <div className="feature-grid" id="how-it-works">
          <article className="feature-card feature-peach">
            <div className="feature-illustration calendar-illustration" aria-hidden="true"><div className="calendar-top">YOUR WEEK <span>•••</span></div><div className="calendar-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span></div><div className="calendar-blocks"><i /><i /><i /><i /></div></div>
            <div className="feature-number">01 — PLAN WITH INTENTION</div>
            <h3>Make a day that feels like yours.</h3>
            <p>Shape your week around what matters, with enough breathing room for the unexpected.</p>
          </article>
          <article className="feature-card feature-lilac">
            <div className="feature-illustration focus-illustration" aria-hidden="true"><span className="focus-sun">☼</span><span className="focus-line">FOCUS SESSION</span><strong>25:00</strong><span className="focus-caption">one thing at a time</span></div>
            <div className="feature-number">02 — FIND YOUR FOCUS</div>
            <h3>One thing at a time. Really.</h3>
            <p>Give your best ideas your best attention. We’ll help the noise wait its turn.</p>
          </article>
          <article className="feature-card feature-sage">
            <div className="feature-illustration progress-illustration" aria-hidden="true"><div className="progress-bars"><i /><i /><i /><i /><i /><i /><i /></div><span className="progress-caption">YOUR PROGRESS, YOUR PACE</span><strong>Look at you, go.</strong></div>
            <div className="feature-number">03 — NOTICE YOUR PROGRESS</div>
            <h3>Celebrate the little wins.</h3>
            <p>See how far you’ve come, without turning your life into another scoreboard.</p>
          </article>
        </div>
      </section>

      <section className="signup-section" id="get-started">
        <div className="signup-sun" aria-hidden="true">✳</div>
        <div className="signup-content">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Your next chapter starts here</div>
          <h2>Let’s make room<br />for <span>good things.</span></h2>
          <p>Get a calmer kind of productive. Your first 14 days are on us.</p>
          {isSubmitted ? (
            <div className="signup-success" role="status">You’re on the list, {email}. See you in the sunshine! ☀</div>
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="signup-email">Your email address</label>
              <input id="signup-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <button type="submit">Get started <span aria-hidden="true">→</span></button>
            </form>
          )}
          <small>No credit card, no pressure. Just a little more daylight.</small>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">d</span><span>daylight</span></a>
        <p>Make room for what matters.</p>
        <span>© 2025 Daylight Studio</span>
      </footer>
    </main>
  )
}

export default App

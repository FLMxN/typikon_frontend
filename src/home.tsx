import './App.css'
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <header className="app-header">
        <div className="header-logo" onClick={() => navigate('/')}>          
          <div className="logo-wrapper">
            <img src="/icon.png" alt="typikon logo" className="logo-image logo-primary" />
            <img src="/favicon.png" alt="" aria-hidden="true" className="logo-image logo-secondary" />
          </div>
        </div>
        
        <nav className="header-nav">
          <button className="nav-btn" aria-label="Repository" onClick={() => navigate('/repository')}>repo</button>
          <button className="nav-btn" aria-label="Spaces" onClick={() => navigate('/spaces')}>spaces</button>
          <button className="nav-btn" aria-label="FAQ" onClick={() => navigate('/faq')}>faq</button>
        </nav>
        
        <a href="/profile" className="profile-link">
          <div className="avatar-placeholder">👤</div>
        </a>
      </header>

      <main className="app-main">
        <div className="hero-section">
          <div className="gradient-box"></div>
          
          <div className="feature-cards">
            <div className="feature-card">
              <div className="card-icon">🌌</div>
              <h3>Explore typologies</h3>
              <p>Wikia for Enneagram, Socionics and more</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🌎</div>
              <h3>Exchange<br/>opinions</h3>
              <p>Connect with others in Spaces</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">✨</div>
              <h3>Special<br/>data-management</h3>
              <p>Fresh user-experience, powered by AI</p> 
            </div>
          </div>

          <div className='login-sec'>
            <button 
              style={{ fontFamily: 'Geist Mono, monospace' }}
              className="action-btn"
              onClick={() => navigate('/login')}>
              login
            </button>
     
            <h3 style={{ fontSize: '16px' }}>
              <Link to="/signup">new here?</Link>
            </h3> 
          </div>
        </div>
      </main>
  </>
  )
};


export default Home

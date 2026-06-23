import { useNavigate, Link } from 'react-router-dom';
import PageLayout from './PageLayout';

function Home() {
  const navigate = useNavigate();
  return (
    <PageLayout>
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
              <h3>Exchange<br />opinions</h3>
              <p>Connect with others in Spaces</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">✨</div>
              <h3>Special<br />data-management</h3>
              <p>Fresh user-experience, powered by AI</p>
            </div>
          </div>

          <div className="login-sec">
            <button
              style={{ fontFamily: 'Geist Mono, monospace' }}
              className="action-btn"
              onClick={() => navigate('/login')}
            >
              login
            </button>

            <h3 style={{ fontSize: '16px' }}>
              <Link to="/signup">new here?</Link>
            </h3>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}

export default Home;

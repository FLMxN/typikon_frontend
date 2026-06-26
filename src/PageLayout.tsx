import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import SideRays from './rays';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <header className="app-header">
          <div className="header-logo" onClick={() => navigate('/', { viewTransition: true })}>
            <img src="/favicon.png" alt="typikon logo" className="logo-image" />
          </div>

          <nav className="header-nav">
            <button className="nav-btn" aria-label="Repository" onClick={() => navigate('/repository', { viewTransition: true })}>
              repo
            </button>
            <button className="nav-btn" aria-label="Spaces" onClick={() => navigate('/spaces', { viewTransition: true })}>
              spaces
            </button>
            <button className="nav-btn" aria-label="FAQ" onClick={() => navigate('/faq', { viewTransition: true })}>
              faq
            </button>
          </nav>

          <a className="profile-link">
            <div className="avatar-placeholder" onClick={() => navigate('/profile', { viewTransition: true })}>
              👤
            </div>
          </a>
        </header>

        {children}

        <div className="ps">
          <h3 style={{ fontSize: '12px', fontWeight: 'lighter' }}>EnneAI, 2026</h3>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
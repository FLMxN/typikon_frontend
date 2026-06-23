import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  const navigate = useNavigate();

  return (
    <>
      <header className="app-header">
        <div className="header-logo" onClick={() => navigate('/', { viewTransition: true })}>
          <img src="/favicon.png" alt="typikon logo" className="logo-image" />
        </div>

        <nav className="header-nav">
          <button className="nav-btn" aria-label="Repository" onClick={() => navigate('/repository', { viewTransition: true })}>repo</button>
          <button className="nav-btn" aria-label="Spaces" onClick={() => navigate('/spaces', { viewTransition: true })}>spaces</button>
          <button className="nav-btn" aria-label="FAQ" onClick={() => navigate('/faq', { viewTransition: true })}>faq</button>
        </nav>

        <a className="profile-link">
          <div className="avatar-placeholder" onClick={() => navigate('/profile', { viewTransition: true })}>👤</div>
        </a>
      </header>

      {children}

      <div className="ps">
        <h3 style={{ fontSize: '12px', fontWeight: 'lighter' }}>EnneAI, 2026</h3>
      </div>
    </>
  );
}

export default PageLayout;

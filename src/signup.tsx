import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';

function SignUp() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <main className="app-main">
        <div className="login-sec">
          <button
            style={{ fontFamily: 'Geist Mono, monospace' }}
            className="action-btn"
            onClick={() => navigate('/login')}
          >
            login
          </button>

          <h3 style={{ fontSize: '16px' }}><a href="/signup">new here?</a></h3>
        </div>
      </main>
    </PageLayout>
  );
}

export default SignUp;

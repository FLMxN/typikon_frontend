import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

function Login() {
  return (
    <PageLayout>
      <main className="app-main signup-main">
        <section className="signup-panel login-panel" aria-labelledby="login-title">
          <div className="signup-copy login-copy">
            <p className="eyebrow">typikon access</p>
            <h1 id="login-title">welcome back</h1>
            <p>Return to your spaces, notes and typology repository.</p>
          </div>

          <form className="signup-form login-form">
            <label>
              <span>email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              <span>password</span>
              <input type="password" name="password" autoComplete="current-password" required />
            </label>

            <div className="login-options">
              <label className="check-row login-check">
                <input type="checkbox" name="remember" />
                <span>keep me signed in</span>
              </label>

              {/* <a href="/login">forgot?</a> */}
            </div>

            <button className="action-btn signup-submit login-submit" type="submit">
              login
            </button>
          </form>

          <p className="signup-alt">
            new here? <Link to="/signup">create account</Link>
          </p>
        </section>
      </main>
    </PageLayout>
  );
}

export default Login;

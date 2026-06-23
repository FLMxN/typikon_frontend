import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

function SignUp() {
  return (
    <PageLayout>
      <main className="app-main signup-main">
        <section className="signup-panel" aria-labelledby="signup-title">
          <div className="signup-copy">
            <p className="eyebrow">typikon access</p>
            <h1 id="signup-title">enter the space</h1>
            <p>
              Build a profile for typologies, notes and discussions.
            </p>
          </div>

          <form className="signup-form">
            <label>
              <span>email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              <span>username</span>
              <input type="text" name="username" minLength={5} autoComplete="username" required />
            </label>

            <label>
              <span>password</span>
              <input
                type="password"
                name="password"
                minLength={8}
                autoComplete="new-password"
                required
              />
            </label>

            <label className="check-row">
              <input type="checkbox" name="updates" />
              <span>update me on patch news</span>
            </label>

            <button className="action-btn signup-submit" type="submit">
              create account
            </button>
          </form>

          <p className="signup-alt">
            already here? <Link to="/login">login</Link>
          </p>
        </section>
      </main>
    </PageLayout>
  );
}

export default SignUp;

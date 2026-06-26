import { useNavigate, Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import DecryptedText from './decrypt';

const dashboardItems = [
  {
    to: '/repository',
    label: 'repo',
    title: 'typology repository',
    text: 'Structured pages for studying Enneagram, Socionics and adjacent systems.',
    meta: 'wiki / theory of typology',
  },
  {
    to: '/spaces',
    label: 'spaces',
    title: 'discussion spaces',
    text: 'Rooms for interpretations, disagreements and coffee talk.',
    meta: 'subspaces / fictional profiles',
  },
  {
    to: '/signup',
    label: 'data',
    title: 'ai features',
    text: 'A modern way to analyze typology arguments and public content to keep Spaces safe and fascinating for everyone.',
    meta: 'moderation / trust system',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <main className="app-main dashboard-main">
        <div className="dashboard-shell">

          <section className="dashboard-intro" aria-labelledby="home-title">
            <p className="eyebrow">typikon by enneai</p>
            {/* <h1 id="home-title">map the person, not just letters</h1> */}
            <h1>
              <DecryptedText text='map the character, not just traits'
              revealDirection='start'
              sequential
              useOriginalCharsOnly={false}
              animateOn="view"
              />
            </h1>
            <p>
              AI-powered forum for learning typology, community reasoning and
              everyday chatting.
            </p>

            <div className="dashboard-actions">
              <button
                className="action-btn dashboard-login"
                onClick={() => navigate('/login', { viewTransition: true })}
              >
                login
              </button>

              <Link className="dashboard-signup" to="/signup" viewTransition>
                new here?
              </Link>
            </div>
          </section>

          <section className="dashboard-modules" aria-label="typikon modules">
            {dashboardItems.map((item) => (
              <Link className="dashboard-module" key={item.label} to={item.to} viewTransition>
                <span className="module-label">{item.label}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <span className="module-meta">{item.meta}</span>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </PageLayout>
  );
}

export default Home;

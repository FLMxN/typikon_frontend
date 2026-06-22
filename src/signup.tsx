import './App.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  return (
      <div className='login-sec'>
            <button 
              style={{ fontFamily: 'Geist Mono, monospace' }}
              className="action-btn"
              onClick={() => navigate('/login')}>
              login
            </button>
     
            <h3 style={{ fontSize: '16px' }}><a href="/signup">new here?</a></h3> 
  </div>
  )
}

export default SignUp;
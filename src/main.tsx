import { createRoot } from 'react-dom/client'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './index.css'

import Home from './home.tsx'
import FAQ from './faq.tsx'
import Repository from './repo.tsx'
import Spaces from './spaces_main.tsx'
import Profile from './profile.tsx'
import Login from './login.tsx'
import SignUp from './signup.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
)

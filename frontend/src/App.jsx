import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import SigninPage from './components/Signin';
import Header from './components/Header';
import SignupPage from './components/Signup';
import PersonalPage from './components/PersonalPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/page" element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

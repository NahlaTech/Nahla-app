import { Route, Routes } from 'react-router-dom';
import LandingPage from './modules/LandingPage/LandingPage';
import NotFoundPage from './modules/NotFoundPage/NotFoundPage';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import AuthenticationLayout from './Authentication/AuthenticationLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

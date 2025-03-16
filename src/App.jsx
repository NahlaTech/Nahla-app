import { Route, Routes } from 'react-router-dom';
import LandingPage from './modules/LandingPage/LandingPage';
import NotFoundPage from './modules/NotFoundPage/NotFoundPage';
import SignUp from './Authentication/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

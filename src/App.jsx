import { Route, Routes } from 'react-router-dom';
import LandingPage from './modules/LandingPage/LandingPage';
import NotFoundPage from './modules/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      {/* <Route path="/about" element={<About />}></Route> */}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

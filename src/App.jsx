import { Route, Routes } from 'react-router-dom';
import LandingPage from './modules/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
      <Route path="*" element={<h1>Page Not Found by omar</h1>}></Route>
    </Routes>
  );
}

export default App;

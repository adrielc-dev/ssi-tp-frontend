import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './pages/LoginSuccessPage';
import DashboardPage from './pages/DashboardPage';
import LinkedinPostPage from './pages/LinkedinPostPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/success" element={<LoginSuccessPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/linkedin-busqueda" element={<LinkedinPostPage />} />
        <Route path="/" element={<Navigate to="/linkedin-busqueda" replace />} />
        <Route path="*" element={<Navigate to="/linkedin-busqueda" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

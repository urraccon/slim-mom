import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/shared-layout/SharedLayout';
import { MainPage } from './pages/main-page/MainPage';
import { LoginPage } from './pages/login-page/LoginPage';
import { RegistrationPage } from './pages/registration-page/RegistrationPage';

export const App = () => {
  return (
    <BrowserRouter basename="/slim-mom">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/shared-layout/SharedLayout';
import { MainPage } from './pages/main-page/MainPage';

export const App = () => {
  return (
    <BrowserRouter basename="/slim-mom">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

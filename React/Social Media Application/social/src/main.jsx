import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/globals.css';
import { store } from './app/store';
import AppRouter from './app/Router';
import { useAuthBootstrap } from './features/auth/hooks/useAuth';

function AppShell() {
  useAuthBootstrap();

  useEffect(() => {
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <AppRouter />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);

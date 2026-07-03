/**
 * App Component — Root Application
 *
 * Sets up:
 * - LoadingScreen for initial app bootstrap animation
 * - MUI ThemeProvider with responsive theme
 * - CssBaseline for consistent styling
 * - LanguageProvider for multi-language support (TH/EN/ZH)
 * - React Router for navigation
 * - MainLayout wrapping all routes
 */
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import './global.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        {/* Loading screen shown during initial bootstrap */}
        <LoadingScreen />
        <MainLayout>
          <Routes>
            {/* Home page - catch-all route renders the expo landing page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

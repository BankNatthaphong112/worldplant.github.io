/**
 * useLanguage Hook
 *
 * Provides language state management across the entire app using React Context.
 * Supports Thai (th), English (en), and Chinese (zh).
 * Language switching happens instantly without page refresh.
 */
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import translations from '../data/translations';

// Create the Language Context
const LanguageContext = createContext(null);

/**
 * LanguageProvider wraps the app and provides language state.
 * @param {object} props - Component props
 * @param {ReactNode} props.children - Child components
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('th');

  // Get translations for current language
  const t = useMemo(() => translations[language] || translations.th, [language]);

  // Memoized language setter
  const changeLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      // Set the HTML lang attribute for accessibility
      document.documentElement.lang = lang;
    }
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ language, setLanguage: changeLanguage, t }),
    [language, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * useLanguage Hook
 * @returns {{ language: string, setLanguage: function, t: object }}
 */
export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

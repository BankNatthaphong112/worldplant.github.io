/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page when the route changes.
 * Uses the pathname from react-router-dom.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

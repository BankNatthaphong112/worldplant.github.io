/**
 * MainLayout Component
 *
 * Wraps the entire application with shared UI elements:
 * - Navbar (sticky, transparent at top, blur on scroll)
 * - ScrollProgress bar at the very top
 * - BackToTop floating button
 * - Footer at the bottom
 * - ScrollToTop (handles route change scrolling)
 */
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import ScrollToTop from '../components/ScrollToTop';

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Fixed progress bar at the very top */}
      <ScrollProgress />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content area */}
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </Box>
  );
}

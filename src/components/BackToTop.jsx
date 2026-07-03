/**
 * BackToTop Component
 *
 * Floating action button that appears when the user scrolls down.
 * Clicking scrolls smoothly to the top of the page.
 */
import { useEffect, useState } from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';
import useLanguage from '../hooks/useLanguage';

export default function BackToTop() {
  const { t } = useLanguage();

  // Show button when page is scrolled down 300px
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Fab
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        aria-label={t.backToTop?.label || 'Back to top'}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1100,
          width: 52,
          height: 52,
          background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(46, 125, 50, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
            boxShadow: '0 6px 25px rgba(46, 125, 50, 0.5)',
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
      </Fab>
    </Zoom>
  );
}

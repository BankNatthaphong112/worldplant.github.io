/**
 * ScrollProgress Component
 *
 * A thin horizontal progress bar at the top of the page
 * that fills as the user scrolls down. Uses MUI LinearProgress.
 */
import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import useLanguage from '../hooks/useLanguage';

export default function ScrollProgress() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      aria-label={t.scrollProgress?.label || 'Scroll Progress'}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 3,
        bgcolor: 'transparent',
        '& .MuiLinearProgress-bar': {
          background: 'linear-gradient(90deg, #66BB6A, #2E7D32, #D4AF37)',
          boxShadow: '0 0 10px rgba(46, 125, 50, 0.5)',
        },
      }}
    />
  );
}

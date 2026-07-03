/**
 * Loading Screen Component
 *
 * Full-screen loading overlay with animated leaf/fade effect.
 * Appears when the app first loads or when navigating between routes.
 */
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ForestIcon from '@mui/icons-material/Forest';
import useLanguage from '../hooks/useLanguage';

export default function LoadingScreen() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <Box
          component={motion.div}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)',
          }}
          role="progressbar"
          aria-label={t.loading?.text || 'Loading'}
        >
          {/* Animated leaf icon */}
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            sx={{ mb: 3 }}
          >
            <ForestIcon
              sx={{
                fontSize: 80,
                color: 'rgba(255, 255, 255, 0.9)',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 800,
              textAlign: 'center',
              mb: 1,
              letterSpacing: '0.05em',
            }}
          >
            UDON EXPO 2026
          </Typography>

          {/* Loading text */}
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.1em',
            }}
          >
            {t.loading?.text || 'Loading...'}
          </Typography>

          {/* Animated dots */}
          <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                component={motion.div}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}

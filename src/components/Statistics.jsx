/**
 * Statistics Section Component
 *
 * Animated counter section displaying key expo statistics.
 * Numbers animate from 0 to their target value when scrolled into view.
 */
import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import useLanguage from '../hooks/useLanguage';

/**
 * AnimatedCounter - Counts from 0 to target value
 */
function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <Typography
      ref={ref}
      variant="h2"
      sx={{
        fontWeight: 900,
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        color: 'primary.main',
        lineHeight: 1,
        mb: 1,
        animation: isInView ? 'counterGlow 3s ease-in-out infinite' : 'none',
      }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </Typography>
  );
}

const statisticsData = [
  { key: 'countries', value: 35, icon: PublicIcon, suffix: '+' },
  { key: 'visitors', value: 5000000, icon: PeopleIcon, suffix: '+' },
  { key: 'area', value: 120, icon: LandscapeIcon, suffix: ' ไร่' },
  { key: 'plants', value: 15000, icon: ParkIcon, suffix: '+' },
  { key: 'exhibitions', value: 200, icon: MuseumIcon, suffix: '+' },
];

export default function Statistics() {
  const { t } = useLanguage();

  return (
    <Box
      id="statistics"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)',
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 25% 50%, white 0%, transparent 50%), radial-gradient(circle at 75% 50%, white 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Chip
            label={t.statistics?.title || 'Key Statistics'}
            size="small"
            sx={{
              mb: 2,
              fontWeight: 700,
              bgcolor: 'rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.9)',
              px: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              color: 'white',
            }}
          >
            {t.statistics?.subtitle || 'The Expo in Numbers'}
          </Typography>
        </Box>

        {/* Statistics Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {statisticsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid size={{ xs: 6, md: 4 }} key={stat.key}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{
                    textAlign: 'center',
                    p: { xs: 2, md: 3 },
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.12)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {/* Icon */}
                  <IconComponent
                    sx={{
                      fontSize: { xs: 32, md: 40 },
                      color: 'rgba(255, 255, 255, 0.6)',
                      mb: 1.5,
                    }}
                  />

                  {/* Animated Counter */}
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix || ''}
                  />

                  {/* Label */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 600,
                      fontSize: { xs: '0.85rem', md: '1rem' },
                      letterSpacing: '0.03em',
                    }}
                  >
                    {t.statistics?.[stat.key] || stat.key}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

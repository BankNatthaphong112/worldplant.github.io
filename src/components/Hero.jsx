/**
 * Hero Component
 *
 * Full-screen hero banner with:
 * - Large background image with overlay gradient
 * - Event title, subtitle, date, and location
 * - Animated CTA buttons
 * - Scrolling indicator
 */
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import useLanguage from '../hooks/useLanguage';
import heroGarden from '../assets/images/hero.jpg';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `
          linear-gradient(
            135deg,
            rgba(27, 94, 32, 0.75) 0%,
            rgba(46, 125, 50, 0.6) 40%,
            rgba(0, 0, 0, 0.3) 100%
          ),
          url(${heroGarden})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
      }}
    >
      {/* Decorative overlay patterns */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(102, 187, 106, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{ textAlign: 'center', py: { xs: 8, md: 10 } }}
        >
          {/* Tag chip */}
          <motion.div variants={fadeInUp} custom={0}>
            <Chip
              label={t.hero?.tag || 'World-Class'}
              size="medium"
              icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
              sx={{
                mb: 3,
                px: 2,
                py: 2.5,
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                bgcolor: 'rgba(212, 175, 55, 0.2)',
                color: '#F4E4A0',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backdropFilter: 'blur(10px)',
                '& .MuiChip-icon': { color: '#D4AF37' },
              }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeInUp} custom={1}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.1,
                mb: 2,
                textShadow: '0 2px 30px rgba(0, 0, 0, 0.3)',
                whiteSpace: 'pre-line',
              }}
            >
              {t.hero?.title || 'Udon Thani\nInternational Horticultural\nExpo 2026'}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInUp} custom={2}>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 500,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                mb: 4,
                letterSpacing: '0.02em',
                textShadow: '0 1px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              {t.hero?.subtitle || 'Where Nature Meets Innovation'}
            </Typography>
          </motion.div>

          {/* Date & Location */}
          <motion.div variants={fadeInUp} custom={3}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 3 }}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarMonthIcon sx={{ color: '#D4AF37', fontSize: 22 }} />
                <Typography
                  variant="body1"
                  sx={{ color: 'white', fontWeight: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}
                >
                  {t.hero?.date || 'November 1, 2026 – March 14, 2027'}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: 40, sm: 1 },
                  height: { xs: 1, sm: 20 },
                  display: { xs: 'none', sm: 'block' },
                  borderLeft: { sm: '1px solid rgba(255,255,255,0.3)' },
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#D4AF37', fontSize: 22 }} />
                <Typography
                  variant="body1"
                  sx={{ color: 'white', fontWeight: 500, fontSize: { xs: '0.85rem', md: '1rem' } }}
                >
                  {t.hero?.location || 'Nong Da Wetland, Udon Thani, Thailand'}
                </Typography>
              </Box>
            </Stack>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} custom={4}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained"
                size="large"
                onClick={scrollToAbout}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 50,
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C5A028 100%)',
                  color: '#1B1B1B',
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #C5A028 0%, #B89424 100%)',
                    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.5)',
                  },
                }}
              >
                {t.hero?.cta || 'Learn More'}
              </Button>
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  borderRadius: 50,
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    border: '2px solid white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {t.hero?.explore || 'Explore Expo'}
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          cursor: 'pointer',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
        onClick={scrollToAbout}
        role="button"
        aria-label="Scroll to learn more"
      >
        <Typography variant="caption" sx={{ letterSpacing: '0.1em', fontSize: '0.7rem' }}>
          SCROLL
        </Typography>
        <ArrowDownwardIcon sx={{ fontSize: 20 }} />
      </Box>
    </Box>
  );
}

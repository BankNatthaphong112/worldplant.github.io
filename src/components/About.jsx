/**
 * About Section Component
 *
 * Explains the expo's history, vision, mission, objectives and importance.
 * Uses glassmorphism cards with framer-motion scroll animations.
 */
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VisionIcon from '@mui/icons-material/Visibility';
import MissionIcon from '@mui/icons-material/TrackChanges';
import HistoryIcon from '@mui/icons-material/History';
import EmblemIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/GroupWork';
import useLanguage from '../hooks/useLanguage';

// Scroll reveal animation
const scrollReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const cards = [
  {
    icon: HistoryIcon,
    color: '#2E7D32',
    bgColor: 'rgba(46, 125, 50, 0.08)',
    titleKey: 'history',
  },
  {
    icon: VisionIcon,
    color: '#D4AF37',
    bgColor: 'rgba(212, 175, 55, 0.08)',
    titleKey: 'vision',
  },
  {
    icon: MissionIcon,
    color: '#66BB6A',
    bgColor: 'rgba(102, 187, 106, 0.08)',
    titleKey: 'mission',
  },
  {
    icon: EmblemIcon,
    color: '#2E7D32',
    bgColor: 'rgba(46, 125, 50, 0.08)',
    titleKey: 'objectives',
  },
  {
    icon: GroupIcon,
    color: '#D4AF37',
    bgColor: 'rgba(212, 175, 55, 0.08)',
    titleKey: 'importance',
  },
];

/**
 * Format a translation key into a human-readable label
 */
function formatKey(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

export default function About() {
  const { t } = useLanguage();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 230, 201, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollReveal}
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Chip
            label={t.about?.title || 'About the Expo'}
            size="small"
            sx={{
              mb: 2,
              fontWeight: 700,
              bgcolor: 'rgba(46, 125, 50, 0.1)',
              color: 'primary.main',
              px: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 2,
              color: 'text.primary',
            }}
          >
            {t.about?.subtitle || 'Udon Thani International Horticultural Expo 2026'}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 750,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            {t.about?.description || ''}
          </Typography>
        </Box>

        {/* Detail Cards Grid */}
        <Grid container spacing={3}>
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const cardText = t.about?.[card.titleKey];
            return (
              <Grid size={{ xs: 12, md: index < 4 ? 6 : 12 }} key={card.titleKey}>
                <Box
                  component={motion.div}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={cardVariants}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    background: `linear-gradient(135deg, ${card.bgColor} 0%, rgba(255, 255, 255, 0.8) 100%)`,
                    border: '1px solid rgba(46, 125, 50, 0.08)',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    display: 'flex',
                    gap: 2.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 40px rgba(46, 125, 50, 0.1)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      minWidth: 52,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: card.bgColor,
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 26, color: card.color }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: '1.05rem',
                        color: 'text.primary',
                      }}
                    >
                      {formatKey(card.titleKey)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {cardText || ''}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

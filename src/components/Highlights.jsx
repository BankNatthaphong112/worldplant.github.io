/**
 * Highlights Section Component
 *
 * Showcases key expo highlights using glassmorphism cards with icons.
 * Animates on scroll using framer-motion.
 */
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import YardIcon from '@mui/icons-material/Yard';
import BiotechIcon from '@mui/icons-material/Biotech';
import WaterIcon from '@mui/icons-material/Water';
import VillaIcon from '@mui/icons-material/Villa';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import useLanguage from '../hooks/useLanguage';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const highlights = [
  { key: 'flowers', icon: YardIcon, color: '#E91E63' },
  { key: 'innovation', icon: BiotechIcon, color: '#1565C0' },
  { key: 'wetlands', icon: WaterIcon, color: '#00897B' },
  { key: 'pavilion', icon: VillaIcon, color: '#D4AF37' },
  { key: 'smartAgri', icon: AgricultureIcon, color: '#2E7D32' },
];

export default function Highlights() {
  const { t } = useLanguage();

  return (
    <Box
      id="highlights"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        background: 'linear-gradient(180deg, #F6FFF8 0%, #E8F5E9 50%, #F6FFF8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          custom={0}
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Chip
            label={t.highlights?.title || 'Expo Highlights'}
            size="small"
            sx={{
              mb: 2,
              fontWeight: 700,
              bgcolor: 'rgba(212, 175, 55, 0.1)',
              color: '#B89424',
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
            {t.highlights?.subtitle || 'Discover Unforgettable Experiences'}
          </Typography>
        </Box>

        {/* Highlights Cards */}
        <Grid container spacing={3}>
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.key}>
                <Box
                  component={motion.div}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeInUp}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    textAlign: 'center',
                    height: '100%',
                    cursor: 'default',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 20px 60px rgba(46, 125, 50, 0.15)`,
                      borderColor: 'rgba(46, 125, 50, 0.2)',
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: 36,
                        color: item.color,
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      fontSize: '1.15rem',
                      color: 'text.primary',
                    }}
                  >
                    {t.highlights?.[item.key]?.title || item.key}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {t.highlights?.[item.key]?.desc || ''}
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

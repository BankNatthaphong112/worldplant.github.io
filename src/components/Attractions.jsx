/**
 * Attractions Section Component
 *
 * Grid of attraction cards with images, titles, and descriptions.
 * Features smooth hover animations and scroll reveals.
 */
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useLanguage from '../hooks/useLanguage';
import galleryBotanical from '../assets/images/gallery_botanical.jpg';
import highlightCulture from '../assets/images/highlight_culture.jpg';
import highlightInnovation from '../assets/images/highlight_innovation.jpg';
import highlightNature from '../assets/images/highlight_nature.jpg';
import galleryWetland from '../assets/images/gallery_wetland.jpg';

const scrollReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Mapping attraction keys to images
const ATTRACTION_IMAGES = {
  botanicalGarden: galleryBotanical,
  culturalVillage: highlightCulture,
  innovationHub: highlightInnovation,
  flowerGarden: highlightNature,
  wetlandPark: galleryWetland,
};

export default function Attractions() {
  const { t } = useLanguage();

  const attractionKeys = ['botanicalGarden', 'culturalVillage', 'innovationHub', 'flowerGarden', 'wetlandPark'];

  return (
    <Box
      id="attractions"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: 'background.default',
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
          variants={scrollReveal}
          custom={0}
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Chip
            label={t.attractions?.title || 'Attractions'}
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
            {t.attractions?.subtitle || 'Must-See Highlights at the Expo'}
          </Typography>
        </Box>

        {/* Attraction Cards */}
        <Grid container spacing={3}>
          {attractionKeys.map((key, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={key}>
              <Box
                component={motion.div}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={scrollReveal}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '100%',
                  bgcolor: 'white',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(46, 125, 50, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 60px rgba(46, 125, 50, 0.15)',
                    '& .attraction-image': {
                      transform: 'scale(1.08)',
                    },
                    '& .attraction-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 220, md: 260 },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    className="attraction-image"
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${ATTRACTION_IMAGES[key]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  {/* Overlay gradient */}
                  <Box
                    className="attraction-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(27, 94, 32, 0.4) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />
                  {/* Location badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      px: 1.2,
                      py: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                  </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: '1.1rem',
                      color: 'text.primary',
                    }}
                  >
                    {t.attractions?.[key]?.title || key}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {t.attractions?.[key]?.desc || ''}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

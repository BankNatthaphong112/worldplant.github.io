/**
 * Gallery Section Component
 *
 * Responsive image grid with hover zoom animation.
 * Uses available images from the public/images directory.
 */
import { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Dialog,
  IconButton,
  DialogContent,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useLanguage from '../hooks/useLanguage';
import heroGarden from '../assets/images/hero_garden.jpg';
import galleryBotanical from '../assets/images/gallery_botanical.jpg';
import galleryWetland from '../assets/images/gallery_wetland.jpg';
import highlightNature from '../assets/images/highlight_nature.jpg';
import highlightCulture from '../assets/images/highlight_culture.jpg';
import highlightInnovation from '../assets/images/highlight_innovation.jpg';

const galleryImages = [
  { src: heroGarden, alt: 'Hero Garden', cols: { xs: 12, md: 6 } },
  { src: galleryBotanical, alt: 'Botanical Garden', cols: { xs: 12, sm: 6, md: 3 } },
  { src: galleryWetland, alt: 'Wetland View', cols: { xs: 12, sm: 6, md: 3 } },
  { src: highlightNature, alt: 'Nature Highlight', cols: { xs: 12, sm: 6, md: 4 } },
  { src: highlightCulture, alt: 'Cultural Highlight', cols: { xs: 12, sm: 6, md: 4 } },
  { src: highlightInnovation, alt: 'Innovation Highlight', cols: { xs: 12, sm: 6, md: 4 } },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: '#F6FFF8',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
            label={t.gallery?.title || 'Gallery'}
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
              color: 'text.primary',
            }}
          >
            {t.gallery?.subtitle || 'Expo Highlights in Pictures'}
          </Typography>
        </Box>

        {/* Image Grid */}
        <Grid container spacing={2}>
          {galleryImages.map((image, index) => (
            <Grid size={image.cols} key={image.src}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                onClick={() => openLightbox(index)}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: { xs: 200, md: index < 1 ? 400 : 260 },
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  '&:hover .gallery-overlay': {
                    opacity: 1,
                  },
                  '&:hover .gallery-image': {
                    transform: 'scale(1.08)',
                  },
                }}
              >
                {/* Image */}
                <Box
                  className="gallery-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />

                {/* Hover overlay */}
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(27, 94, 32, 0.4)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      transform: 'translateY(10px)',
                      transition: 'transform 0.4s ease',
                      '.gallery-overlay:hover &': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {image.alt}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Click to expand
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lightbox Dialog */}
      <Dialog
        open={lightboxOpen}
        onClose={closeLightbox}
        maxWidth="xl"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              bgcolor: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(10px)',
            },
          },
          paper: {
            sx: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              maxHeight: '90vh',
              m: 0,
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {/* Close button */}
          <IconButton
            onClick={closeLightbox}
            aria-label="Close lightbox"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous button */}
          <IconButton
            onClick={goPrev}
            aria-label="Previous image"
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 1200,
                  height: { xs: 300, md: '80vh' },
                  backgroundImage: `url(${galleryImages[currentIndex].src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <IconButton
            onClick={goNext}
            aria-label="Next image"
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Counter */}
          <Typography
            variant="body2"
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.7)',
              bgcolor: 'rgba(0,0,0,0.5)',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontSize: '0.85rem',
            }}
          >
            {currentIndex + 1} / {galleryImages.length}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

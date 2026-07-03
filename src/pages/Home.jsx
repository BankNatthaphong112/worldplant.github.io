/**
 * Home Page Component
 *
 * Composes all landing page sections together:
 * Hero → About → Highlights → Attractions → Statistics → Timeline → Gallery → VisitorInfo → FAQ
 */
import { Suspense, lazy } from 'react';
import { Box, Typography } from '@mui/material';
import Hero from '../components/Hero';
import useLanguage from '../hooks/useLanguage';

// Lazy load below-fold sections for performance
const About = lazy(() => import('../components/About'));
const Highlights = lazy(() => import('../components/Highlights'));
const Attractions = lazy(() => import('../components/Attractions'));
const Statistics = lazy(() => import('../components/Statistics'));
const Timeline = lazy(() => import('../components/Timeline'));
const Gallery = lazy(() => import('../components/Gallery'));
const VisitorInfo = lazy(() => import('../components/VisitorInfo'));
const FAQ = lazy(() => import('../components/FAQ'));

/**
 * Fallback component shown while lazy sections are loading
 */
function SectionFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
        minHeight: 200,
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero is loaded eagerly (above fold) */}
      <Hero />

      {/* Below-fold sections are lazy-loaded */}
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Highlights />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Attractions />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Statistics />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Timeline />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <VisitorInfo />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
    </>
  );
}

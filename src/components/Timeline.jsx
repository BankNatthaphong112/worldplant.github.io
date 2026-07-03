/**
 * Timeline Section Component
 *
 * Vertical timeline displaying key events:
 * - Opening Ceremony (Nov 1, 2026)
 * - Mid-Expo Activities (Nov – Feb)
 * - New Year Festival (Dec – Jan)
 * - Closing Ceremony (Mar 14, 2027)
 */
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from '@mui/icons-material/Event';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FlagIcon from '@mui/icons-material/Flag';
import useLanguage from '../hooks/useLanguage';

const timelineEvents = [
  { key: 'opening', icon: CelebrationIcon, color: '#D4AF37' },
  { key: 'midTerm', icon: EventIcon, color: '#2E7D32' },
  { key: 'newYear', icon: AutoAwesomeIcon, color: '#E91E63' },
  { key: 'closing', icon: FlagIcon, color: '#1565C0' },
];

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <Box
      id="timeline"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
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
            label={t.timeline?.title || 'Timeline'}
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
              color: 'text.primary',
            }}
          >
            {t.timeline?.subtitle || 'Key Events Throughout the Expo'}
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 24, md: '50%' },
              transform: { md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(180deg, #D4AF37, #2E7D32, #66BB6A, #2E7D32)',
              borderRadius: 2,
              opacity: 0.3,
            }}
          />

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <Box
                key={event.key}
                component={motion.div}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
                  alignItems: 'flex-start',
                  mb: { xs: 4, md: 6 },
                  pl: { xs: 8, md: 0 },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 16, md: '50%' },
                    transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    bgcolor: event.color,
                    border: '4px solid white',
                    boxShadow: `0 0 0 3px ${event.color}40, 0 4px 15px rgba(0,0,0,0.1)`,
                    zIndex: 2,
                    top: { xs: 8, md: 12 },
                  }}
                />

                {/* Content card */}
                <Box
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    ml: { xs: 0, md: isLeft ? 0 : '55%' },
                    mr: { md: isLeft ? '55%' : 0 },
                    p: { xs: 2.5, md: 3.5 },
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 40px ${event.color}15`,
                    },
                  }}
                >
                  {/* Icon + Title row */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: `${event.color}12`,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 20, color: event.color }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'text.primary',
                          lineHeight: 1.2,
                        }}
                      >
                        {t.timeline?.[event.key]?.title || event.key}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: event.color,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      >
                        {t.timeline?.[event.key]?.date || ''}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '0.9rem',
                    }}
                  >
                    {t.timeline?.[event.key]?.desc || ''}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

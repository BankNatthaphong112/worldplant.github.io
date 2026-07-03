/**
 * VisitorInfo Section Component
 *
 * Comprehensive visitor information including:
 * - Opening hours
 * - Transportation options
 * - Parking details
 * - Ticket pricing
 * - Contact information
 */
import { Box, Container, Typography, Grid, Chip, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useLanguage from '../hooks/useLanguage';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function VisitorInfo() {
  const { t } = useLanguage();

  return (
    <Box
      id="visitor-info"
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
          sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}
        >
          <Chip
            label={t.visitorInfo?.title || 'Visitor Information'}
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
            {t.visitorInfo?.subtitle || 'Everything You Need to Know'}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Opening Hours */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component={motion.div}
              variants={fadeInUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              sx={{
                p: 3.5,
                borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(46, 125, 50, 0.1)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(46, 125, 50, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t.visitorInfo?.hours?.title || 'Opening Hours'}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.visitorInfo?.hours?.weekdays || 'Mon–Fri: 09:00–20:00'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.visitorInfo?.hours?.weekends || 'Sat–Sun: 08:00–21:00'}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Transportation */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component={motion.div}
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              sx={{
                p: 3.5, borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(46, 125, 50, 0.1)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <DirectionsBusIcon sx={{ color: '#D4AF37', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t.visitorInfo?.transport?.title || 'Transportation'}
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <DirectionsCarIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {t.visitorInfo?.transport?.byCar || ''}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <DirectionsBusIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {t.visitorInfo?.transport?.byBus || ''}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <TrainIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {t.visitorInfo?.transport?.byTrain || ''}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Parking */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component={motion.div}
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              sx={{
                p: 3.5, borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(46, 125, 50, 0.1)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(46, 125, 50, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <LocalParkingIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t.visitorInfo?.parking?.title || 'Parking'}
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {t.visitorInfo?.parking?.desc || ''}
              </Typography>
            </Box>
          </Grid>

          {/* Tickets */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              component={motion.div}
              variants={fadeInUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              sx={{
                p: 3.5, borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(46, 125, 50, 0.1)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ConfirmationNumberIcon sx={{ color: '#D4AF37', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t.visitorInfo?.tickets?.title || 'Tickets'}
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.visitorInfo?.tickets?.adult || 'Adult: 200 THB'}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t.visitorInfo?.tickets?.child || 'Child: 80 THB'}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2E7D32', fontWeight: 600 }}>
                  {t.visitorInfo?.tickets?.senior || 'Senior (60+): Free'}
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  {t.visitorInfo?.tickets?.note || 'Students in uniform enter free on weekdays'}
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              component={motion.div}
              variants={fadeInUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              sx={{
                p: 3.5, borderRadius: 4,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(46, 125, 50, 0.1)',
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(46, 125, 50, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <PhoneIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {t.visitorInfo?.contact?.title || 'Contact Us'}
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 18, color: '#D4AF37' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t.visitorInfo?.contact?.phone || '+66 42 123 456'}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ fontSize: 18, color: '#D4AF37' }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t.visitorInfo?.contact?.email || 'info@udonexpo2026.com'}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <LocationOnIcon sx={{ fontSize: 18, color: '#D4AF37', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {t.visitorInfo?.contact?.address || ''}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

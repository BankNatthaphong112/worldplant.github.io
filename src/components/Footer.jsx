/**
 * Footer Component
 *
 * Full footer with:
 * - Logo and branding
 * - Quick links
 * - Contact information
 * - Social media links
 * - Copyright notice
 */
import { Box, Container, Typography, Grid, Stack, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ForestIcon from '@mui/icons-material/Forest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import useLanguage from '../hooks/useLanguage';

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YouTubeIcon, href: '#', label: 'YouTube' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
];

const quickLinkItems = [
  { key: 'about', href: '#about' },
  { key: 'highlights', href: '#highlights' },
  { key: 'attractions', href: '#attractions' },
  { key: 'statistics', href: '#statistics' },
  { key: 'timeline', href: '#timeline' },
  { key: 'gallery', href: '#gallery' },
  { key: 'visitorInfo', href: '#visitor-info' },
  { key: 'faq', href: '#faq' },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1B5E20',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top decorative gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #D4AF37, #66BB6A, #D4AF37)',
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                <ForestIcon sx={{ fontSize: 36, color: '#66BB6A' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1, fontSize: '1.1rem' }}>
                    UDON EXPO
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                    2026
                  </Typography>
                </Box>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.7,
                  mb: 3,
                  maxWidth: 300,
                }}
              >
                Udon Thani International Horticultural Expo 2026
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <IconButton
                      key={social.label}
                      component={motion.a}
                      whileHover={{ scale: 1.15, y: -3 }}
                      href={social.href}
                      aria-label={social.label}
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                          bgcolor: '#D4AF37',
                          color: '#1B5E20',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 20 }} />
                    </IconButton>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  color: '#66BB6A',
                  letterSpacing: '0.02em',
                }}
              >
                {t.footer?.quickLinks || 'Quick Links'}
              </Typography>
              <Stack spacing={1}>
                {quickLinkItems.map((item) => (
                  <Box
                    key={item.key}
                    component="a"
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      '&:hover': {
                        color: '#D4AF37',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {t.nav?.[item.key] || item.key}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  color: '#66BB6A',
                  letterSpacing: '0.02em',
                }}
              >
                {t.footer?.contact || 'Contact Us'}
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <LocationOnIcon sx={{ fontSize: 20, color: '#D4AF37', mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                    {t.visitorInfo?.contact?.address || ''}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 20, color: '#D4AF37' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {t.visitorInfo?.contact?.phone || '+66 42 123 456'}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ fontSize: 20, color: '#D4AF37' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {t.visitorInfo?.contact?.email || 'info@udonexpo2026.com'}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: { xs: 4, md: 5 } }} />
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {t.footer?.copyright || '© 2026 Udon Thani International Horticultural Expo. All rights reserved.'}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                '&:hover': { color: '#D4AF37' },
                transition: 'color 0.3s ease',
              }}
            >
              {t.footer?.privacy || 'Privacy Policy'}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                '&:hover': { color: '#D4AF37' },
                transition: 'color 0.3s ease',
              }}
            >
              {t.footer?.terms || 'Terms & Conditions'}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

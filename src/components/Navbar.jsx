/**
 * Navbar Component
 *
 * Sticky navigation bar with:
 * - Transparent at top, becomes blurred on scroll
 * - Logo, navigation links, and language switcher
 * - Smooth scrolling to sections
 * - Mobile hamburger menu
 * - Framer Motion animations
 */
import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import ForestIcon from '@mui/icons-material/Forest';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import useLanguage from '../hooks/useLanguage';

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'highlights', href: '#highlights' },
  { key: 'attractions', href: '#attractions' },
  { key: 'statistics', href: '#statistics' },
  { key: 'timeline', href: '#timeline' },
  { key: 'gallery', href: '#gallery' },
  { key: 'visitorInfo', href: '#visitor-info' },
  { key: 'faq', href: '#faq' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(46, 125, 50, 0.1)'
            : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          color: scrolled ? 'text.primary' : 'white',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onClick={() => handleNavClick('home')}
            >
              <ForestIcon
                sx={{
                  fontSize: 32,
                  color: scrolled ? 'primary.main' : 'white',
                  filter: scrolled ? 'none' : 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                  transition: 'color 0.3s ease',
                }}
              />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    lineHeight: 1.1,
                    letterSpacing: '0.02em',
                    color: scrolled ? 'primary.dark' : 'white',
                    transition: 'color 0.3s ease',
                  }}
                >
                  UDON EXPO
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.8)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  2026
                </Typography>
              </Box>
            </Box>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: activeSection === item.href.replace('#', '')
                        ? (scrolled ? 'primary.main' : 'white')
                        : (scrolled ? 'text.secondary' : 'rgba(255,255,255,0.8)'),
                      fontWeight: activeSection === item.href.replace('#', '') ? 700 : 500,
                      fontSize: '0.8rem',
                      px: 1.2,
                      py: 0.6,
                      minWidth: 'auto',
                      borderRadius: 2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 2,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: activeSection === item.href.replace('#', '') ? '60%' : 0,
                        height: 2,
                        borderRadius: 1,
                        bgcolor: scrolled ? 'primary.main' : 'white',
                        transition: 'all 0.3s ease',
                      },
                      '&:hover': {
                        bgcolor: scrolled
                          ? 'rgba(46, 125, 50, 0.08)'
                          : 'rgba(255, 255, 255, 0.12)',
                        '&::after': { width: '60%' },
                      },
                    }}
                  >
                    {t.nav?.[item.key] || item.key}
                  </Button>
                ))}
                <Box sx={{ ml: 1 }}>
                  <LanguageSwitcher />
                </Box>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LanguageSwitcher />
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open navigation menu"
                  sx={{
                    ml: 0.5,
                    color: scrolled ? 'text.primary' : 'white',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              bgcolor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(46, 125, 50, 0.1)',
            },
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  selected={activeSection === item.href.replace('#', '')}
                  sx={{
                    borderRadius: 3,
                    '&.Mui-selected': {
                      bgcolor: 'rgba(46, 125, 50, 0.1)',
                    },
                    '&:hover': {
                      bgcolor: 'rgba(46, 125, 50, 0.06)',
                    },
                  }}
                >
                  <ListItemText
                    primary={t.nav?.[item.key] || item.key}
                    primaryTypographyProps={{
                      fontWeight: activeSection === item.href.replace('#', '') ? 700 : 500,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Drawer>
    </>
  );
}

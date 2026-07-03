/**
 * MUI Theme Configuration for Udon Thani Horticultural Expo 2026
 *
 * Design tokens:
 * - Color Palette: Green (#2E7D32), Secondary Green (#66BB6A), Gold (#D4AF37)
 * - Typography: Poppins (EN), Noto Sans Thai (TH), Noto Sans SC (CN)
 * - Glassmorphism, rounded cards, elegant shadows
 */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Color palette
const colors = {
  primary: '#2E7D32',
  primaryDark: '#1B5E20',
  primaryLight: '#388E3C',
  secondary: '#66BB6A',
  secondaryLight: '#81C784',
  accent: '#C8E6C9',
  gold: '#D4AF37',
  goldLight: '#F4E4A0',
  white: '#FFFFFF',
  background: '#F6FFF8',
  bgLight: '#E8F5E9',
  textPrimary: '#1B1B1B',
  textSecondary: '#5A5A5A',
  glassBg: 'rgba(255, 255, 255, 0.75)',
  glassBorder: 'rgba(255, 255, 255, 0.3)',
};

// Font families per language
const fontFamilies = {
  th: '"Noto Sans Thai", "Prompt", sans-serif',
  en: '"Poppins", "Noto Sans Thai", sans-serif',
  zh: '"Noto Sans SC", sans-serif',
};

// Typography configuration
const typography = {
  fontFamily: fontFamilies.en,
  h1: {
    fontFamily: fontFamilies.en,
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: fontFamilies.en,
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
  },
  h3: {
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  h4: {
    fontWeight: 700,
    letterSpacing: '-0.01em',
    lineHeight: 1.25,
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h6: {
    fontWeight: 600,
    lineHeight: 1.35,
  },
  subtitle1: {
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
  body1: {
    lineHeight: 1.7,
    letterSpacing: '0.01em',
  },
  body2: {
    lineHeight: 1.6,
  },
  button: {
    fontWeight: 600,
    letterSpacing: '0.03em',
    textTransform: 'none',
  },
};

// Component style overrides
const components = {
  MuiCssBaseline: {
    styleOverrides: `
      html {
        scroll-behavior: smooth;
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
        }
      }
    `,
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        padding: '10px 28px',
        fontSize: '1rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(46, 125, 50, 0.3)',
        },
      },
      contained: {
        boxShadow: '0 4px 15px rgba(46, 125, 50, 0.2)',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        background: colors.glassBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${colors.glassBorder}`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 48px rgba(46, 125, 50, 0.15)',
        },
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 24,
        '&:last-child': {
          paddingBottom: 24,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        backgroundImage: 'none',
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        marginBottom: 12,
        border: `1px solid ${colors.glassBorder}`,
        background: colors.glassBg,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        padding: '0 20px',
        '&.Mui-expanded': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        fontWeight: 600,
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
};

// Build the theme with responsive font sizes
let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
    },
    accent: {
      main: colors.gold,
      light: colors.goldLight,
    },
    background: {
      default: colors.background,
      paper: colors.white,
      light: colors.bgLight,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.accent,
    gold: colors.gold,
  },
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});

theme = responsiveFontSizes(theme);

export default theme;

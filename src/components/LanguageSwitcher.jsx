/**
 * LanguageSwitcher Component
 *
 * Dropdown select for switching between Thai (TH), English (EN), and Chinese (ZH).
 * Uses useLanguage hook for instant language switching.
 */
import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CheckIcon from '@mui/icons-material/Check';
import useLanguage from '../hooks/useLanguage';

const LANGUAGES = [
  { code: 'th', label: 'ภาษาไทย', short: 'TH' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: 'ZH' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code) => {
    setLanguage(code);
    handleClose();
  };

  const currentLang = LANGUAGES.find((l) => l.code === language);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-label="Change language"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          color: 'inherit',
          borderRadius: 2,
          px: 1.5,
          gap: 0.5,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.15)',
          },
        }}
      >
        <TranslateIcon sx={{ fontSize: 20 }} />
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            fontSize: '0.75rem',
            display: { xs: 'none', sm: 'inline' },
          }}
        >
          {currentLang?.short || 'TH'}
        </Typography>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 160,
              borderRadius: 3,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            },
          },
        }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            selected={language === lang.code}
            sx={{
              borderRadius: 2,
              mx: 0.5,
              my: 0.25,
              '&.Mui-selected': {
                bgcolor: 'rgba(46, 125, 50, 0.1)',
              },
              '&:hover': {
                bgcolor: 'rgba(46, 125, 50, 0.08)',
              },
            }}
          >
            <ListItemText>
              <Typography variant="body2" fontWeight={language === lang.code ? 700 : 400}>
                {lang.label}
              </Typography>
            </ListItemText>
            {language === lang.code && (
              <ListItemIcon sx={{ minWidth: 'auto', ml: 1 }}>
                <CheckIcon sx={{ fontSize: 18, color: 'primary.main' }} />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

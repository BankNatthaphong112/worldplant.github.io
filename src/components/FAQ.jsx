/**
 * FAQ Section Component
 *
 * 10 frequently asked questions displayed in an MUI Accordion.
 * Fully driven by translation files for multi-language support.
 */
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuizIcon from '@mui/icons-material/Quiz';
import useLanguage from '../hooks/useLanguage';

const FAQ_ITEMS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function FAQ() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative backgrounds */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 230, 201, 0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
            label={t.faq?.title || 'FAQ'}
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
            {t.faq?.subtitle || 'Frequently Asked Questions'}
          </Typography>
        </Box>

        {/* FAQ Accordions */}
        <Box component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {FAQ_ITEMS.map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Accordion
                expanded={expanded === num}
                onChange={handleChange(num)}
                sx={{
                  '&.Mui-expanded': {
                    margin: '0 0 12px 0',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === num ? 'primary.main' : 'text.secondary',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  aria-controls={`faq${num}-content`}
                  id={`faq${num}-header`}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                      gap: 1.5,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: 1.5,
                      bgcolor: expanded === num
                        ? 'rgba(46, 125, 50, 0.12)'
                        : 'rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <QuizIcon
                      sx={{
                        fontSize: 16,
                        color: expanded === num ? 'primary.main' : 'text.secondary',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: expanded === num ? 700 : 600,
                      fontSize: '0.95rem',
                      color: expanded === num ? 'primary.dark' : 'text.primary',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {t.faq?.[`q${num}`] || `Question ${num}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      pl: 5,
                    }}
                  >
                    {t.faq?.[`a${num}`] || `Answer ${num}`}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

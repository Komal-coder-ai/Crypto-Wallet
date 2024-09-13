import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import servicelogo from '../../assets/icon/servicelogo.svg';
import ButtonCom from '../../components/button';

const Service = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      mt: { xs: 8, sm: 10 }, 
    }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6} display="flex" justifyContent="center" alignItems="center">
          <img src={servicelogo} alt="Service Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} display="flex" justifyContent="center" alignItems="center">
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
             
            }}
          >
            <Typography variant="h3" component="h1" fontWeight="bold" sx={{ color: 'white', mb: 3 }}>
              24/7 Access to Comprehensive Customer Support
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey.400', mb: 4 }}>
              Experience round-the-clock assistance from our dedicated team, ready to help you with any inquiries or issues to ensure your seamless experience.
            </Typography>
            <ButtonCom name="Get Started" bgcolor="none" border="1px solid" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;

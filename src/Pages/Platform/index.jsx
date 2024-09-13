import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ButtonCom from '../../components/button';

import platformstar from '../../assets/start/platformstar.svg';
import { HashLink } from 'react-router-hash-link';
import { Box, Typography } from '@mui/material';

const Platform = () => {
  return (
    <Box
      className="PlatFormContainer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        mt: { xs: 8, sm: 10, md: 15, lg: 17 }, // Top margin adjustments for different breakpoints
      }}
    >
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={7} lg={7} className="text-center">
            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                color: 'var(--white-color)',
                fontSize: { xs: '30px', sm: '40px', md: '50px' }, // Responsive font size
                fontWeight: 900,
                fontFamily: 'var(--font-family-inter)',
                mb: 4,
              }}
            >
              Empowering Your Crypto Journey with Strategic Mining Investments
            </Typography>

            {/* Paragraph */}
            <Typography
              sx={{
                color: 'var(--paragraph-color)',
                fontWeight: 400,
                fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
                lineHeight: '24px',
                width: { xs: '90%', md: '70%' },
                margin: 'auto',
                mb: 4,
              }}
            >
              Unlock your potential with our tailored mining solutions, designed to maximize your gains and support your growth in the crypto world.
            </Typography>

            {/* Get Started Button */}
            <Nav.Link className="nav_Link" as={HashLink} smooth>
              <ButtonCom
                name="Get Started"
                bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)"
                border="none"
              />
            </Nav.Link>

            {/* Image */}
            <Box
              component="img"
              src={platformstar}
              alt="Platform Star"
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                maxWidth: { xs: '40%', sm: '50%' }, // Responsive image width
                transform: {
                  xs: 'translate(-30%, 50%)',
                  sm: 'translate(-20%, 50%)', // Responsive image position
                },
                mt: 4,
              }}
              className="platformstar"
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Platform;

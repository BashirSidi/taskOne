"use client"
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  // textAlign: 'center',
}));

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        {/* Hero */}
        <Box>
          <Typography
            sx={{
              mt: { xs: '10px', md: '60px' },
              textAlign: 'center',
              color: '#000',
              fontSize:{ xs: '30px', md: '56px' },
              fontWeight: { xs: 500, md: 700 },
              lineHeight: '140%',
            }}
          >
            Minimalist Room
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              color: '#000',
              mt: { xs: '16px', md: '40px' },
              mb: { xs: '16px', md: '60px' },
              fontSize: { xs: '14px', md: '18px' },
              fontWeight: 400,
              lineHeight: '160%',
              mx: { xs: 'auto', md: 'auto' },
              width: { xs: '90%', md: '518px' },
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </Box>

        <Box 
          component='img'
          src="/images/largeImageOne.svg" 
          alt="product image one"
          sx={{ 
            width: '100%',
            height: { xs: '', md: '' },
            display: { xs: 'flex', md: 'flex' },
            mb: { xs: '16px', md: '60px' },
          }}
        />


      {/* overview / process */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Box 
        sx={{ 
          flexGrow: 1,
        }}
        >
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid xs={6}>
              <Item>xs=6</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      </Container>
    </main>
  )
}

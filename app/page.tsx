"use client"
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { PrimaryButton } from './components/Buttons';

const styles = {
  detailsTitle: {
    fontSize:{ xs: '16px', md: '24px' },
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '140%',
    color: '#333',
    mb: { xs: '16px', md: '30px' },
  },
  detailsContents: {
    color: '#9C9C9C',
    width: { xs: '100%', md: '584px' },
    fontSize: { xs: '14px', md: '18px' },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '160%',
  }
}

const Item = styled(Paper)(({ theme }) => ({
  border: 'none',
  boxShadow: 'none',
}));

export default function Home() {
  return (
    <main>
      <Container>
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
            mb: { xs: '16px', md: '60px' },
          }}
        />


      {/* overview / process */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'flex' },
        }}
      >
        <Box 
        sx={{ 
          flexGrow: 1,
        }}
        >
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Item>
                  <Typography
                    sx={{
                      ...styles.detailsTitle
                    }}
                  >
                    Project Overview
                  </Typography>

                  <Typography
                    sx={{
                      ...styles.detailsContents,
                      mb: '60px',
                    }}
                  >
                    Online learning with us does not interfere with your daily life.
                    because learning can be done anytime and anywhere. Online learning
                    with us does not interfere with your daily life. because learning can be
                    done anytime and anywhere. Online learning with us does not interfere with
                    your daily life. because learning can be done anytime and anywhere.
                  </Typography>
                  <Typography
                    sx={{
                      ...styles.detailsContents,
                    }}
                  >
                    July 22 - 2022
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    Interior Design - Furnitur
                  </Typography>
              </Item>
            </Grid>
            <Grid xs={12} md={6}>
              <Item>
                  <Typography
                    sx={{
                      ...styles.detailsTitle
                    }}
                  >
                    Design Process
                  </Typography>

                  <Typography
                    sx={{
                      ...styles.detailsContents,
                      mb: '30px',
                    }}
                  >
                    Online learning with us does not interfere with your daily life.
                    because learning can be done anytime and anywhere. Online learning
                    with us does not interfere with your daily life. because learning
                    can be done anytime and anywhere.
                  </Typography>
                  <Typography
                    sx={{
                      ...styles.detailsContents
                    }}
                  >
                    Online learning with us does not interfere with your daily life.
                    because learning can be done anytime and anywhere. Online learning
                    with us does not interfere with your daily life. because learning can
                    be done anytime and anywhere.
                  </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
        

      {/* images section */}
        <Box
          sx={{
            my: { xs: '16px', md: '60px' },
          }}
        >
          <Box 
          sx={{ 
            flexGrow: 1,
          }}
          >
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid xs={6}>
              <Item>
                <Box 
                  component='img'
                  src="/images/cardImg1.svg" 
                  alt="card image one"
                  sx={{ 
                    width: '100%',
                  }}
                />
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                  <Box 
                    component='img'
                    src="/images/cardImg2.svg" 
                    alt="card image one"
                    sx={{ 
                      width: '100%',
                    }}
                  />
              </Item>
            </Grid>
          </Grid>
          </Box>
          
          <Box 
            component='img'
            src="/images/largeImageTwo.svg" 
            alt="product image one"
            sx={{ 
              width: '100%',
              mt: { xs: '10px', md: '30px' },
              mb: { xs: '10px', md: '30px' },
            }}
          />

          <Box 
            sx={{ 
              flexGrow: 1,
            }}
          >
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid xs={6}>
              <Item>
                <Box 
                  component='img'
                  src="/images/cardImg3.svg" 
                  alt="card image one"
                  sx={{ 
                    width: '100%',
                  }}
                />
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                  <Box 
                    component='img'
                    src="/images/cardImg4.svg" 
                    alt="card image one"
                    sx={{ 
                      width: '100%',
                    }}
                  />
              </Item>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          background: '#2C3878',
        }}
      >
        <Container>
          <Box 
            sx={{ 
              flexGrow: 1,
            }}
          >
          <Grid container spacing={2}>
            <Grid xs={12} md={7}>
              <Item sx={{background: '#2C3878'}}>
                <Typography
                    sx={{
                      my: '30px',
                      color: '#fff',
                      fontSize:{ xs: '20px', md: '36px' },
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '170%',
                      width: { xs: '100%', md: '613px' },
                    }}
                  >
                    let&apos;s discuss making your interior like a dream place!
                  </Typography>
              </Item>
            </Grid>
            <Grid xs={12} md={5}>
              <Item sx={{background: '#2C3878'}}>
                  <Typography
                    sx={{
                      my: { xs: '0px', md: '30px' },
                      mb: { xs: '30px', md: '30px' },
                      color: '#fff',
                      fontSize: { xs: '14px', md: '18px' },
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '160%',
                      width: { xs: '100%', md: '432px' },
                    }}
                  >
                    Contact us below to work together to build your amazing interior
                  </Typography>
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: 'start' },
                    }}
                  >
                    <PrimaryButton
                      sx={{
                        height: '49px',
                        width: '142px',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        color: '#2C3878',
                        background: '#ffffff',
                        mb: '40px',
                        borderRadius: '0px',
                        '&:hover': {
                          backgroundColor: '#ffffff',
                        },
                      }}
                    >
                      Contact Us
                    </PrimaryButton>
                  </Box>
              </Item>
            </Grid>
          </Grid>
          </Box>
        </Container>
      </Box>

    </main>
  )
}

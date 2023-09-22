import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography
} from '@mui/material'

export default function Footer() {
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        p: {xs: 2, md: 6},
        mb: '20px',
      }}
    >
      
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
            <Box 
              component='img'
              src="/images/footerLogo.svg" 
              alt="Brand Logo"
              sx={{ 
                width: '126px',
                display: 'flex',
                mx: { xs: 'auto', md: '0' },
                '&:hover': {
                  cursor: 'pointer',
                }, 
              }}
            />
              <Box sx={{
                width: {xs: '200px', md: '481px'},
                mx: { xs: 'auto', md: '0' },
              }}>
                <Typography
                  sx={{
                    textAlign: {xs: 'center', md: 'left'},
                    fontWeight:  {xs: '500', md: '600'},
                    fontSize: {xs: '16px', md: '36px'},
                    lineHeight: { xs: '130%', md: '170%' },
                    fontStyle: 'normal',
                    color: '#000'
                  }}
                >
                  One of the best furniture agency.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box>
              <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      mt: '30px',
                    }}
                  >
                    <Box
                      component='img'
                      src="/images/fillCircle.svg"
                      alt="fillCircle_logo"
                      sx={{
                        opacity: 'none !important',
                        mr: '10px',
                      }}
                    />
                      <Typography
                        sx={{
                          fontSize: {xs: '12px', md: '18px'},
                          fontWeight: 400,
                          // width: {xs: '100%', md: '100%'},
                          fontStyle: 'normal',
                        }}
                      >
                      Enter your email to get the laterst news
                    </Typography>
                  </Box>

                  <FormControl
                  sx={{
                    m: 1,
                    color: '#000',
                    width: {xs: '100%', md: '440px'},
                  }}
                    variant="standard"
                  >
                    <InputLabel
                      sx={{
                      color: '#D9D9D9',
                      fontSize: {xs: '12px', md: '16px'},
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '160%',
                      opacity: '0.6000000238418579',
                      '&.Mui-focused': {
                        color: '#000', 
                      },
                      }}
                      htmlFor="standard-adornment-password"
                    >
                      Email Address
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type='text'
                      sx={{
                        color: '#141414',
                        paddingY: {xs: '4px', md: '8px'},
                        borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
                        // opacity: '0.6000000238418579',
                        // '&:focus': {
                        //   borderColor: 'none', 
                        // },
                        '&::after': {
                          transition: 'none',
                          borderBottom: '0px solid #141414',
                        },
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                          >
                          <Box 
                            component='img'
                            src="/images/inputArrow.svg" 
                            alt="icon"
                            sx={{ 
                              color: '#141414 !important',
                              opacity: 'none !important',
                              pb: {xs: '12px', md: '26px'},
                            }}
                          />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  
                  <Box
                    sx={{
                      mt: '30px',
                      marginLeft: {xs: '0', md: '50%'}
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: {xs: '12px', md: '16px'},
                        lineHeight: '160%px',
                        fontStyle: 'normal',
                      }}
                    >
                      Follow us On
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: {xs: '16px', md: '0'},
                        marginTop: {xs: '16px', md: '20px'}
                      }}
                    >
                      <Box
                          component='img'
                          src="/images/facebook.svg"
                          alt="facebook_logo"
                          sx={{
                            background: '#ccc',
                            padding: '6px',
                            borderRadius: '50%',
                            color: '#fff !important',
                            opacity: 'none !important',
                            marginRight: '16px'
                          }}
                        />
                      <Box
                        component='img'
                        src="/images/instagram.svg"
                        alt="instagram_logo"
                        sx={{
                          background: '#ccc',
                          padding: '6px',
                          borderRadius: '50%',
                          color: '#fff !important',
                          opacity: 'none !important',
                          marginRight: '16px'
                        }}
                      />
                      <Box
                        component='img'
                        src="/images/tiktok.svg"
                        alt="tiktok_logo"
                        sx={{
                          background: '#ccc',
                          padding: '6px',
                          borderRadius: '50%',
                          color: '#fff !important',
                          opacity: 'none !important',
                        }}
                      />
                      <Box
                        component='img'
                        src="/images/youtube.svg"
                        alt="youtube_logo"
                        sx={{
                          background: '#ccc',
                          padding: '6px',
                          borderRadius: '50%',
                          color: '#fff !important',
                          opacity: 'none !important',
                        }}
                      />
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
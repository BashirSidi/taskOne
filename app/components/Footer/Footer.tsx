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
        p: 6,
      }}
    >
      
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
              <Box sx={{
                width: {xs: '200px', md: '481px'},
              }}>
                <Typography
                  sx={{
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
                  <FormControl
                  sx={{
                    m: 1,
                    marginTop: {xs: '0', md: '60px'},
                    color: '#000',
                    width: {xs: '90%', md: '60%'} ,
                  }}
                    variant="standard"
                  >
                    <InputLabel
                      sx={{
                      color: '#000',
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
                        color: '#000',
                        paddingY: '4px',
                        borderBottom: '2px solid rgba(255, 255, 255, 0.15)',
                        // opacity: '0.6000000238418579',
                        // '&:focus': {
                        //   borderColor: 'none', 
                        // },
                        '&::after': {
                          transition: 'none',
                          borderBottom: '0px solid #000',
                        },
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                          >
                          <Box 
                            component='img'
                            src="" 
                            alt="icon"
                            sx={{ 
                              color: '#000 !important',
                              opacity: 'none !important',
                            }}
                          />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
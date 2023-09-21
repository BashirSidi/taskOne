import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Box>
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
      </Box>
    </main>
  )
}

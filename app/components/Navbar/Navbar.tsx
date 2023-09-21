"use client"
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import { SecondaryButton, PrimaryButton } from '../Buttons';
import { NAV_LINKS } from '@/app/constants';
import { useRouter } from 'next/router';

const pages = ['About Us', 'Our Portal', 'Our Customers', 'News | Blog'];

type Props = {}

const Navbar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar 
        position="static"
        sx={{
          background: "#fff",
          py: { xs: '', md: '16px' },
          border: 'none',
          boxShadow: 'none',
        }}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
        
        <Box 
          component='img'
          src="/images/dananz_logo.png" 
          alt="Brand Logo"
          sx={{ 
            width: '126px',
            display: { xs: 'none', md: 'flex' },
            '&:hover': {
              cursor: 'pointer',
            }, 
          }}
        />

          {/* mobile navs */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NAV_LINKS.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* desktop navs */}
          <Box sx={{ 
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'end',
            }}>
            {NAV_LINKS.map((page) => (
              <Button
                key={page}
                sx={{
                  mx: 5,
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'noraml',
                  color: '#000000',
                  '&:hover': {
                    backgroundColor: '#ffffff',
                  },
                  display: 'block',
                  textTransform: 'capitalize',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              flexGrow: 0,
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
                color: '#ffffff',
                borderRadius: '0px',
                '&:hover': {
                  backgroundColor: '#2C3878',
                },
              }}
            >
              Contact Us
            </PrimaryButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Navbar 
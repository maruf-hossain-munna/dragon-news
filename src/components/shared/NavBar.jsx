'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Stack from '@mui/material/Stack';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';


const pages = ['Products', 'Pricing', 'Blog'];
const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "News",
        href: "/news"
    },
    {
        title: "Category",
        href: "/category"
    },
    {
        title: "Blogs",
        href: "/blogs"
    },
    {
        title: "Contact",
        href: "/contact"
    },
]

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters >

                    <Stack direction="row" className=' w-full flex justify-between items-center'>
                        <Image
                            src='/images/logo.png'
                            alt=''
                            width={150}
                            height={100}
                        />


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                className = "w-full flex md:hidden justify-self-end"
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
                                    display: { xs: 'flex', md: 'none', width:'100%', justifyContent: 'end' },
                                }}
                            >
                                {navItems.map((item) => (
                                    <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{item.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', width: '100%' } }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>


                        <Box className="text-white hidden lg:flex justify-end" sx={{ flexGrow: 1, display: { xs: 'none', color: 'white', md: 'flex' }, "& svg": { color: "white" } }}>

                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
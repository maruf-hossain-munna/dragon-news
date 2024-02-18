import { Box, Button, Container, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";


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


export default function Footer() {
    return (
        <Box className="bg-black py-10">
            <Container maxWidth="xl" >
                <Box className=" text-white hover:text-blue-600 hidden lg:flex justify-center" sx={{ flexGrow: 1, display: { xs: 'none', color: 'white', md: 'flex' }, "& svg": { color: "white" } }}>

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </Box>

                <Box className="my-6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', gap: '20px', width: '100%' } }}>
                    {navItems.map((item) => (
                        <Link
                            className='text-white hover:text-blue-700 uppercase px-3'
                            key={item.title}
                            href={item.href}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </Box>

                <Typography className="font-old" variant="body2" textAlign='center' color='gray'>
                    @2023 Dragon News. Developed by <Link href='https://maruf-hossain-munna.vercel.app/' className="text-blue-500"> Maruf Hossain Munna </Link>
                </Typography>

            </Container>
        </Box>
    )
}

import { getCurrentDate } from '@/utils/getCurrentDate'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const currentDate = getCurrentDate();
    return (
        <Box className="my-7">
            <Container maxWidth='xl'>
                <Box>
                    <Image
                        src='/images/theDragonNews.png'
                        alt='Logo image'
                        width={500}
                        height={500}
                        className='mx-auto'
                    />

                    <Typography className="my-2" variant="body2" textAlign='center' color='gray'>
                        Journalism Without Fear or Favour
                    </Typography>

                    <Typography className="" variant="body1" textAlign='center' >
                        {currentDate}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Image from 'next/image';

export default function NewsCardSideBar({ news }) {
    return (
        <Box >
            <Box className='flex items-center gap-4 pb-2 border-b border-gray-300'>
                <Box className="w-1/3">
                    <Image
                        src={news.thumbnail_url}
                        alt={news.title}
                        width={300}
                        height={100}
                        className='w-full rounded-md object-cover'
                    />
                </Box>
                <Box className='w-2/3'>
                    <Typography className='text-xl font-medium hover:underline cursor-pointer'  >
                        {news.title.slice(0, 35)}...
                    </Typography>
                    <Typography className='text-md font-medium mt-1 mb-3' color="text.secondary">
                        {news.author.published_date}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Image from 'next/image';

export default function SmallNewsCard({ news }) {
    console.log(news)
    return (
        <Card >
            <CardActionArea>
                <CardMedia>
                    <Image
                        src={news.thumbnail_url}
                        alt={news.title}
                        width={800}
                        height={300}
                        className='w-full h-[250px] rounded-md'
                    />
                </CardMedia>
                <Box className='mt-7 pb-4 px-3'>
                    <p className='w-32 mb-4 text-center bg-red-700 text-white border border-red-700 py-1 rounded-sm'>
                        {news.category}
                    </p>
                    <Typography className='text-lg lg:text-xl font-bold'  >
                        {news.title}
                    </Typography>
                    <Typography className='text-md font-medium mt-2 mb-3'>
                        By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news.details.slice(0, 130)}...
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    )
}

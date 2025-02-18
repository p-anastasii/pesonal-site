import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="body2" sx={{ mt: 1 }}>
                Contact me:
                <Link href="mailto:anastasiia@gmail.com" sx={{ color: 'white', ml: 1 }}>
                    anastasiia@gmail.com
                </Link>
            </Typography>
            <Typography variant="body2">
                Follow me on:
                <Link href="https://www.linkedin.com/in/anastasiiaportnenko" sx={{ color: 'white', ml: 1 }}>
                    LinkedIn
                </Link>
                |
                <Link href="https://github.com/p-anastasii" sx={{ color: 'white', ml: 1 }}>
                    GitHub
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
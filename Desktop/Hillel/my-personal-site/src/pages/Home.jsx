import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Hello! My name is Anastasiia.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                This is my resume page. Here you can find information about my skills, experience, and more.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Skills
                        </Typography>
                        <ul>
                            <li>Frontend Development (React, JavaScript)</li>
                            <li>Backend Development (PHP, Node.js)</li>
                            <li>CSS/SCSS, Responsive Design</li>
                            <li>Version Control (Git)</li>
                            <li>Testing (Unit, Integration)</li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Experience
                        </Typography>
                        <ul>
                            <li>Frontend Developer at ABC Corp. (2021-2023)</li>
                            <li>Manual Tester at XYZ Company (2020-2021)</li>
                            <li>Internship at DEF Ltd. (2019-2020)</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1">
                    Bachelor's degree in Computer Science, University of XYZ (2019).
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
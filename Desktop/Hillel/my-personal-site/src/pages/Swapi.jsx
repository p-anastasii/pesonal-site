import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, ListItemText, CircularProgress, Typography, TextField } from '@mui/material';
import axios from 'axios';

const SwapiPage = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                setCharacters(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error', error);
                setLoading(false);
            });
    }, []);

    // Фильтрация персонажей по имени
    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 2 }}>Star Wars Characters</Typography>
            <TextField
                label="Search Character"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ mb: 2 }}
            />
            {loading ? (
                <CircularProgress />
            ) : (
                <List>
                    {filteredCharacters.map((character, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={character.name} secondary={`Height: ${character.height} cm`} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default SwapiPage;
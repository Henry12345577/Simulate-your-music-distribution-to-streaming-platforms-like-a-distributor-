const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock API for music upload
app.post('/upload-music', (req, res) => {
    const { artistName, albumName, songName, platforms } = req.body;

    // Here you can mock saving the data to a database or file
    console.log('Uploading Music:', {
        artistName,
        albumName,
        songName,
        platforms
    });

    res.status(200).json({ message: 'Music uploaded successfully!', data: req.body });
});

// Mock API for getting music metadata
app.get('/music-metadata', (req, res) => {
    const musicData = [
        {
            artistName: "Artist 1",
            albumName: "Album 1",
            songName: "Song 1",
            platforms: ["Spotify", "YouTube Music"]
        },
        {
            artistName: "Artist 2",
            albumName: "Album 2",
            songName: "Song 2",
            platforms: ["Tidal", "Audiomack"]
        }
    ];

    res.status(200).json({ musicData });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

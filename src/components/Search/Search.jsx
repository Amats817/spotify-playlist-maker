import React, { useState } from 'react';
import './search.css';
import { fetchSearchResults, createPlaylist } from '../../SpotifyAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import PlaylistManager from './PlaylistManager';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [playlist, setPlaylist] = useState([]); 
    const [playlistName, setPlaylistName] = useState(''); 

    const handleSearchClick = async () => {
        if (query.trim()) {
            try {
                setLoading(true);
                setError(null);
                const searchResults = await fetchSearchResults(query);
                setResults(searchResults);
            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAddToPlaylist = (track) => {
        setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
    };

    const handleRemoveFromPlaylist = (trackId) => {
        setPlaylist((prevPlaylist) => prevPlaylist.filter(track => track.id !== trackId));
    };

    const handleCreatePlaylist = async () => {
        if (playlist.length === 0 || playlistName.trim() === '') {
            alert('Please add tracks to your playlist and provide a name.');
            return;
        }
        try {
            const playlistData = await createPlaylist(playlistName, playlist);
            alert(`Playlist "${playlistData.name}" created successfully!`);
        } catch (error) {
            alert('Error creating playlist: ' + error.message);
        }
    };

    return (
        <div className="search-container">
            <SearchBar query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
            <div className="result-playlist">
                <SearchResults
                    results={results}
                    loading={loading}
                    error={error}
                    handleAddToPlaylist={handleAddToPlaylist}
                />
                <PlaylistManager
                    playlist={playlist}
                    handleRemoveFromPlaylist={handleRemoveFromPlaylist}
                    playlistName={playlistName}
                    setPlaylistName={setPlaylistName}
                    handleCreatePlaylist={handleCreatePlaylist}
                />
            </div>
        </div>
    );
};

export default Search;

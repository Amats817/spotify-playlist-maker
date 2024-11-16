import React from 'react';

const SearchResults = ({ results, loading, error, handleAddToPlaylist }) => {
    return (
        <div className="result-bg">
            <h1>Search Results</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className="results">
                {results.length > 0 ? (
                    results.map((track) => (
                        <div key={track.id} className="result-item">
                            <img
                                src={track.album.images[0]?.url}
                                alt={track.name}
                                className="result-image"
                            />
                            <div className="result-info">
                                <h3>{track.name}</h3>
                                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                                <button
                                    className="add-button"
                                    onClick={() => handleAddToPlaylist(track)}
                                >
                                    Add to Playlist
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;

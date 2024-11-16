import React from 'react';

const PlaylistManager = ({ playlist, handleRemoveFromPlaylist, playlistName, setPlaylistName, handleCreatePlaylist }) => {
    return (
        <div className="playlist-builder">
            <h2>Your Playlist</h2>
            {playlist.length > 0 ? (
                <div className="playlist">
                    {playlist.map((track) => (
                        <div key={track.id} className="playlist-item">
                            <img
                                src={track.album.images[0]?.url}
                                alt={track.name}
                                className="playlist-image"
                            />
                            <div className="playlist-info">
                                <h3>{track.name}</h3>
                                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemoveFromPlaylist(track.id)}
                                >
                                    Remove from Playlist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No tracks added to your playlist yet.</div>
            )}

            <div className="playlist-name">
                <input
                    type="text"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    placeholder="Enter playlist name"
                    className="playlist-name-input"
                />
                <button onClick={handleCreatePlaylist} className="create-playlist-button">
                    Create Playlist
                </button>
            </div>
        </div>
    );
};

export default PlaylistManager;

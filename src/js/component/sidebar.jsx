import React from 'react';
import logomusic from '../../img/logomusic.png';

function Sidebar({ playlists, onSelectPlaylist }) {
    return (
        <div className="sidebar">
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logomusic} alt="Logo" style={{ width: '80px', height: '80px', marginRight: '10px' }} />
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>SongNest</span>
            </div>

            <div className="playlists">
                <h3>Playlists</h3>
                <ul>
                    {playlists.map((playlist, index) => (
                        <li key={index} onClick={() => onSelectPlaylist(index)}>
                            {playlist.playlistName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

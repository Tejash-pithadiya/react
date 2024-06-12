import React from 'react';

const VideoPlayer = () => {
    return (
        <center className="Videop">
            <div className="video-container">
                <video  autoPlay loop>
                    <source src="img/Video1.mp4" type="video/mp4" />
                </video>
            </div>
        </center>
    );
};

export default VideoPlayer;
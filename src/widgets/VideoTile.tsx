import React from "react";
import type { Video } from '../../resources/types/applicationTypes';

type VideoTileProps = 
{video: Video}

const VideoTile: React.FC<VideoTileProps> = ({ video }) => {
    return (
        <div className="video-tile min-w-70">
            {/* Video Image */}
            <div className="video-image">
                <img src={video.thumbnail} alt={video.title} />
                <span className="duration-badge">10 mins</span>
            </div>

            {/* Video Info */}
            <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <p className="video-date">{new Date(video.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>

            <style>{`
                .video-tile {
                    background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    max-width: 100%;
                }

                .video-tile:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
                }

                .video-image {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.25%; /* 16:9 aspect ratio */
                    overflow: hidden;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }

                .video-image img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .duration-badge {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    background: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .video-info {
                    padding: 16px;
                }

                .video-title {
                    margin: 0 0 8px 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: #1a202c;
                    line-height: 1.4;
                }

                .video-description {
                    margin: 0 0 10px 0;
                    font-size: 13px;
                    color: #4a5568;
                    line-height: 1.5;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .video-date {
                    margin: 0;
                    font-size: 12px;
                    color: #a0aec0;
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
}

export default VideoTile;
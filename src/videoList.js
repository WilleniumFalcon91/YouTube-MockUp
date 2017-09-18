import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem key={video.etag} video={video} />
        )
    })
    return (
        <ul className="videoList">
            {videoItems}
        </ul>
    )
}

export default VideoList;
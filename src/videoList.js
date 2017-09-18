import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="videoList">
            {props.videos.length}
        </ul>
    )
}

export default VideoList;
import React from 'react';
import './skeleton.css';

const Skeleton = ({ type }) => {
    const COUNTER = 8;

    const FeedSkeleton = () => (
        <div className="postSk">
            <div className="postSkImg"></div>
            <div className="postSkInfo">
                <div className="postSkAvatar"></div>
                <div className="postSkDetail">
                    <div className="postSkText"></div>
                    <div className="postSkText sm"></div>
                </div>
            </div>
        </div>
    );

    if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
}

export default Skeleton;

import React from 'react';
import './skeleton.css';
import { CircularProgress } from '@material-ui/core';

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

    const TopSkeleton = () => (
        <div className="topSk">
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkImg"></div>
        </div>
    );

    const MenuSkeleton = () => (
        <div className="menuSk">
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
        </div>
    );

    const Circle = () => (
        <div className="circle">
            <CircularProgress />
        </div>
    );

    if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
    if (type === "top") return <TopSkeleton />;
    if (type === "menu") return <MenuSkeleton />;
    if (type === "circle") return <Circle />;
}

export default Skeleton;

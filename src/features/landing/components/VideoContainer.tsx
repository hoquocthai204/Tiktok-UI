import { DownIcon } from '@/components/Icons';
import { shareOptionInfo } from '@/constants/landing/shareOptionInfo';
import { authState } from '@/features/auth/authSlice';
import LoginPopup from '@/features/auth/components/LoginPopup';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import { Popover } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface VideoContainerProps {
    favoriteAmount: string;
    messageAmount: string;
    bookmarkAmount: string;
    shareAmount: string;
}

const VideoContainer: React.FunctionComponent<VideoContainerProps> = ({
    favoriteAmount,
    messageAmount,
    bookmarkAmount,
    shareAmount,
}) => {
    const [favorite, setFavorite] = React.useState<boolean>(false);
    const isLoggedIn = useSelector(authState).isLoggedIn;
    const [open, setOpen] = useState(false);
    const [shareMore, setShareMore] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement | null>(null);

    const handleSelect = (val: string) => {
        switch (val) {
            case 'favorite':
                if (isLoggedIn) setFavorite(!favorite);
                else setOpen(true);
                break;
            case 'comment':
                if (!isLoggedIn) setOpen(true);
                break;
            case 'bookmark':
                if (!isLoggedIn) setOpen(true);
                break;

            default:
                break;
        }
    };

    const handleShareMore = () => {
        setShareMore(true);
    };

    const handleShare = (val: string) => {
        switch (val) {
            case 'friend':
                !isLoggedIn && setOpen(true);
                break;

            default:
                break;
        }
    };

    const sharePopoverContent = (
        <div className="share-popover">
            <ul className="share-popover__option-box">
                {shareOptionInfo.map((val, index) =>
                    !shareMore ? (
                        index < 5 && (
                            <li
                                key={val.key}
                                className="share-popover__option"
                                onClick={() => handleShare(val.key)}
                            >
                                <val.icon /> {val.text}
                            </li>
                        )
                    ) : (
                        <li
                            key={val.key}
                            className="share-popover__option"
                            onClick={() => handleShare(val.key)}
                        >
                            <val.icon /> {val.text}
                        </li>
                    ),
                )}
            </ul>

            {!shareMore && (
                <div className="share-popover__more" onClick={handleShareMore}>
                    <DownIcon />
                </div>
            )}
        </div>
    );

    const handleShareChange = () => {
        setShareMore(false);
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                // Set the currently playing video to the new video that came into view
                setCurrentVideo(videoRef.current);
            }
        });
    };

    useEffect(() => {
        // Pause the old video when a new video starts playing
        if (isVisible && currentVideo && currentVideo !== videoRef.current) {
            currentVideo.pause();
            currentVideo.currentTime = 0; // Reset to the beginning of the video
        }

        // Play or pause the video based on visibility state
        if (isVisible && videoRef.current) {
            videoRef.current.play();
        } else if (!isVisible && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isVisible, currentVideo]);

    return (
        <div className="landing__item-video-wrapper">
            <div className="landing__video-container">
                <video ref={videoRef} controls muted loop>
                    <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="landing__video-option-container">
                <div className="landing__option-box" onClick={() => handleSelect('favorite')}>
                    <button className="landing__video-option">
                        <FavoriteIcon style={favorite ? { color: 'red' } : {}} />
                    </button>

                    <span className="landing__option-amount">{favoriteAmount}</span>
                </div>

                <div className="landing__option-box" onClick={() => handleSelect('comment')}>
                    <button className="landing__video-option">
                        <MessageIcon />
                    </button>

                    <span className="landing__option-amount">{messageAmount}</span>
                </div>

                <div className="landing__option-box" onClick={() => handleSelect('bookmark')}>
                    <button className="landing__video-option">
                        <BookmarkIcon />
                    </button>

                    <span className="landing__option-amount">{bookmarkAmount}</span>
                </div>

                <Popover
                    className="landing__option-box"
                    placement="topLeft"
                    content={sharePopoverContent}
                    onOpenChange={handleShareChange}
                >
                    <button className="landing__video-option">
                        <i className="fa-solid fa-share"></i>
                    </button>

                    <span className="landing__option-amount">{shareAmount}</span>
                </Popover>
            </div>

            <LoginPopup setOpen={setOpen} open={open} />
        </div>
    );
};

export default VideoContainer;

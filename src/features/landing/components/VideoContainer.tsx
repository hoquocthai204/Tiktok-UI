import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from 'react-redux';
import { authState } from '@/features/auth/authSlice';
import LoginPopup from '@/features/auth/components/LoginPopup';

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

    return (
        <div className="landing__item-video-wrapper">
            <div className="landing__video-container">
                <video controls>
                    <source src="" type="video/mp4" />
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

                <div className="landing__option-box" onClick={() => handleSelect('share')}>
                    <button className="landing__video-option">
                        <i className="fa-solid fa-share"></i>
                    </button>

                    <span className="landing__option-amount">{shareAmount}</span>
                </div>
            </div>
            <LoginPopup setOpen={setOpen} open={open} />
        </div>
    );
};

export default VideoContainer;

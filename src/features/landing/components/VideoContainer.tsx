import * as React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';

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

    const handleFavorite = () => {
        setFavorite(!favorite);
    };
    return (
        <div className="landing__item-video-wrapper">
            <div className="landing__video-container">
                <video controls>
                    <source src="" type="video/mp4" />
                </video>
            </div>
            <div className="landing__video-option-container">
                <div className="landing__option-box">
                    <button className="landing__video-option" onClick={handleFavorite}>
                        <FavoriteIcon style={favorite ? { color: 'red' } : {}} />
                    </button>

                    <span className="landing__option-amount">{favoriteAmount}</span>
                </div>

                <div className="landing__option-box">
                    <button className="landing__video-option">
                        <MessageIcon />
                    </button>

                    <span className="landing__option-amount">{messageAmount}</span>
                </div>

                <div className="landing__option-box">
                    <button className="landing__video-option">
                        <BookmarkIcon />
                    </button>

                    <span className="landing__option-amount">{bookmarkAmount}</span>
                </div>

                <div className="landing__option-box">
                    <button className="landing__video-option">
                        <i className="fa-solid fa-share"></i>
                    </button>

                    <span className="landing__option-amount">{shareAmount}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;

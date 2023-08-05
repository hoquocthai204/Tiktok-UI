import { followCardInfo } from '@/constants/following/followCardInfo';
import { authState } from '@/features/auth/authSlice';
import LoginPopup from '@/features/auth/components/LoginPopup';
import ItemContent from '@/features/landing/components/ItemContent';
import ItemImage from '@/features/landing/components/ItemImage';
import VideoContainer from '@/features/landing/components/VideoContainer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowCard from '../components/FollowCard';
import cardLogo from '@/assets/images/card_logo2.png';

interface FollowingPageProps {}

const tagData = [
    'kienthucofficial',
    'kienthuc',
    'learnontiktok',
    'meovatcuocsong',
    'xuhuong',
    'meovat',
];

const FollowingPage: React.FunctionComponent<FollowingPageProps> = (props) => {
    const isLoggedIn = useSelector(authState).isLoggedIn;
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleFollow = () => {
        !isLoggedIn && setShowLoginPopup(true);
    };

    return (
        <div className="following">
            {isLoggedIn ? (
                [1, 2, 3, 4].map((e) => (
                    <div className="landing__item-container">
                        <ItemImage src={cardLogo} />
                        <div className="landing__item-content-container">
                            <ItemContent
                                tagData={tagData}
                                title={'reviewcuocsongs'}
                                name={'Review Cuộc Sống'}
                                description={'đi chợ sẽ gặp'}
                                isFollowing
                            />

                            <div className="landing__item-music-container">
                                <Link to={''} target="_blank" rel="noopener noreferrer">
                                    <MusicNoteIcon className="landing__music-link" />{' '}
                                    <span>RAVE - Dxrk ダーク</span>
                                </Link>
                            </div>

                            <VideoContainer
                                favoriteAmount={'126.4K'}
                                messageAmount={'126.4K'}
                                bookmarkAmount={'126.4K'}
                                shareAmount={'126.4K'}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="follow__container">
                    {followCardInfo.map((e) => (
                        <FollowCard
                            name={e.name}
                            subname={e.subName}
                            avatar={e.avatar}
                            background={e.background}
                            handleFollow={handleFollow}
                        />
                    ))}
                </div>
            )}

            <LoginPopup setOpen={setShowLoginPopup} open={showLoginPopup} />
        </div>
    );
};

export default FollowingPage;

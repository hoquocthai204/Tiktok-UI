import { authState } from '@/features/auth/authSlice';
import LoginPopup from '@/features/auth/components/LoginPopup';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface ItemContentProps {
    tagData: string[];
    title: string;
    name: string;
    description: string;
    isFollowing?: boolean;
}

const ItemContent: React.FunctionComponent<ItemContentProps> = ({
    tagData,
    title,
    name,
    description,
    isFollowing,
}) => {
    const isLoggedIn = useSelector(authState).isLoggedIn;
    const [openLoginPopup, setOpenLoginPopup] = useState(false);

    const handleFollow = () => {
        console.log(isLoggedIn);
        if (!isLoggedIn) setOpenLoginPopup(true);
    };
    return (
        <div className="landing__item-content">
            <div className="landing-item__left-side">
                <div className="landing__author-container">
                    <span className="landing__author-title">{title}</span>
                    <span className="landing__author-name">{name}</span>
                </div>

                <div className="landing__author-description-container">
                    <span className="landing__author-description">{description}</span>
                    <div className="landing__tag-list">
                        {tagData.map((val, index) => (
                            <Link
                                key={index}
                                to={'navlink'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {val}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {!isFollowing && (
                <div className="landing-item__right-side">
                    <button className="landing__item-option" onClick={handleFollow}>
                        Follow
                    </button>
                </div>
            )}
            <LoginPopup setOpen={setOpenLoginPopup} open={openLoginPopup} />
        </div>
    );
};

export default ItemContent;

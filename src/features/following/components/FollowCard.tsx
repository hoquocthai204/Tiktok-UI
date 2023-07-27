import { Button } from 'antd';
import React from 'react';

interface FollowCardProps {
    name: string;
    subname: string;
    avatar: string;
    background: string;
    handleFollow: () => void;
}

const FollowCard: React.FunctionComponent<FollowCardProps> = ({
    background,
    name,
    subname,
    avatar,
    handleFollow,
}) => {
    return (
        <div className="follow-card">
            <img className="follow-card__background" src={background} alt="" />
            <div className="follow-card__info-box">
                <div className="follow-card__logo-container">
                    <img src={avatar} alt="" />
                </div>
                <p className="follow-card__name">{name}</p>
                <p className="follow-card__subname">{subname}</p>
                <Button onClick={handleFollow} className="follow-card__btn">
                    Follow
                </Button>
            </div>
        </div>
    );
};

export default FollowCard;

import React from 'react';

type Props = {
    image: string;
    name: string;
    subname: string;
};

const AccountCard = ({ image, name, subname }: Props) => {
    return (
        <div className="account-card">
            <div className="card-image__container">
                <img src={image} alt="" className="card-image" />
            </div>
            <div className="account-card__content">
                <p className="card-name">{name}</p>
                <p className="card-subname">{subname}</p>
            </div>
        </div>
    );
};

export default AccountCard;

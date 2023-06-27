import React from 'react';

type Props = {
    className?: string;
};

const SongIcon = (props: Props) => {
    return (
        <span {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="rgba(22, 24, 35, 1)"
                data-styleType={0}
                className="tiktok-1alsdqb-StyledIcon epjbyn2"
            >
                <use xlinkHref="#Music_Note-8c658968"></use>
            </svg>
        </span>
    );
};

export { SongIcon };

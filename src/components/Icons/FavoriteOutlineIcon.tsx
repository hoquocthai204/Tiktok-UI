import React from 'react';

type Props = {
    className?: string;
};

const FavoriteOutlineIcon = (props: Props) => {
    return (
        // <span {...props}>
        <svg
            className="css-g0144v"
            width="1em"
            data-e2e=""
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 11C9 8.23858 11.2386 6 14 6H34C36.7614 6 39 8.23858 39 11V40C39 40.7439 38.5871 41.4263 37.9282 41.7716C37.2693 42.1168 36.4732 42.0678 35.8616 41.6444L24 33.4325L12.1384 41.6444C11.5268 42.0678 10.7307 42.1168 10.0718 41.7716C9.41286 41.4263 9 40.7439 9 40V11ZM14 10C13.4477 10 13 10.4477 13 11V36.1829L22.8616 29.3556C23.5465 28.8815 24.4535 28.8815 25.1384 29.3556L35 36.1829V11C35 10.4477 34.5523 10 34 10H14Z"
            ></path>
        </svg>
        // </span>
    );
};

export { FavoriteOutlineIcon };

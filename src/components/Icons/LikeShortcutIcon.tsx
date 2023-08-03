import * as React from 'react';

interface LikeShortcutIconProps {
    [val: string]: any;
}

const LikeShortcutIcon: React.FunctionComponent<LikeShortcutIconProps> = (props) => {
    return (
        <svg
            width="24"
            data-e2e=""
            height="24"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M31.5 33C31.5 33.5523 31.0523 34 30.5 34H20.5C19.3954 34 18.5 33.1046 18.5 32V15C18.5 14.4477 18.9477 14 19.5 14H21.5C22.0523 14 22.5 14.4477 22.5 15V30H30.5C31.0523 30 31.5 30.4477 31.5 31V33Z"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
            ></path>
        </svg>
    );
};

export { LikeShortcutIcon };

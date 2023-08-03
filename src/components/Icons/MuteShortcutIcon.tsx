import * as React from 'react';

interface MuteShortcutIconProps {
    [val: string]: any;
}

const MuteShortcutIcon: React.FunctionComponent<MuteShortcutIconProps> = (props) => {
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
            <path d="M15 14C14.4477 14 14 14.4478 14 15V33C14 33.5523 14.4477 34 15 34H17C17.5523 34 18 33.5523 18 33V21L21.9562 33.3061C22.0891 33.7196 22.4738 34 22.9082 34H25.0911C25.5255 34 25.9102 33.7196 26.0431 33.3061L30 21V33C30 33.5523 30.4477 34 31 34H33C33.5523 34 34 33.5523 34 33V15C34 14.4477 33.5523 14 33 14L29.7129 14.0001C29.2863 14.0001 28.9067 14.2707 28.7676 14.6741L24 28.5L19.2324 14.6741C19.0933 14.2707 18.7137 14.0001 18.287 14.0001L15 14Z"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
            ></path>
        </svg>
    );
};

export { MuteShortcutIcon };

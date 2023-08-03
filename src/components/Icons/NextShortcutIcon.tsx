import * as React from 'react';

interface NextShortcutIconProps {
    [val: string]: any;
}

const NextShortcutIcon: React.FunctionComponent<NextShortcutIconProps> = (props) => {
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
            <path d="M22.7191 30.6487C23.359 31.5037 24.641 31.5037 25.2809 30.6487L32.0848 21.5588C32.8744 20.5038 32.1216 19 30.8038 19H17.1962C15.8784 19 15.1256 20.5038 15.9152 21.5588L22.7191 30.6487Z"></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11C3 6.58172 6.58172 3 11 3H37C41.4183 3 45 6.58172 45 11V37C45 41.4183 41.4183 45 37 45H11C6.58172 45 3 41.4183 3 37V11ZM11 7H37C39.2091 7 41 8.79086 41 11V37C41 39.2091 39.2091 41 37 41H11C8.79086 41 7 39.2091 7 37V11C7 8.79086 8.79086 7 11 7Z"
            ></path>
        </svg>
    );
};

export { NextShortcutIcon };

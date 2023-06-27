import React, { useState } from 'react';
import { MessageHeaderIcon, InboxIcon, SearchHeaderIcon, TimeIcon } from '../Icons';
import mainLogo from '@/assets/images/tiktok_logo.svg.png';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
    const [inputContent, setInputContent] = useState<string>('');
    const navigate = useNavigate();

    const handleCleanSearch = () => {
        setInputContent('');
    };

    return (
        <div className="header">
            <div className="header__image-container" onClick={() => navigate('')}>
                <img src={mainLogo} alt="tiktok_logo" className="header__logo" />
            </div>

            <div className="header__search">
                <input
                    placeholder="Search"
                    type="text"
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                />

                <div className="header__search-option">
                    {inputContent && (
                        <TimeIcon className="header__time-icon" onClick={handleCleanSearch} />
                    )}

                    <Divider className="header__search-divider" orientation={'vertical'} />
                    <SearchHeaderIcon className="header__search-icon" />
                </div>
            </div>

            <div className="header__options">
                <button
                    className="header-option header-option__upload"
                    onClick={() => navigate('upload')}
                >
                    <span>
                        <svg
                            className="tiktok-qeydvm-StyledPlusIcon e18d3d945"
                            width="1em"
                            data-e2e=""
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                            ></path>
                        </svg>
                    </span>{' '}
                    Upload
                </button>
                <MessageHeaderIcon className="header-option header-option__message" />
                <InboxIcon className="header-option header-option__inbox" />
                <div className="header-option header-option__more-menu"></div>
            </div>
        </div>
    );
};

export { Header };

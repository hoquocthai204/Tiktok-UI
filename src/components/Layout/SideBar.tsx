import React, { useEffect, useMemo, useState } from 'react';
import { CameraIcon, CompassIcon, FollowingIcon, HomeIcon } from '../Icons';
import { Divider } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCard from '../Common/AccountCard';
import accoutLogo from '@/assets/images/account_logo.png';
import {
    sidebarFooterLinkGroup1,
    sidebarFooterLinkGroup2,
    sidebarFooterLinkGroup3,
} from '@/constants/common/sidebarFooterLink';

type Props = {};

const SideBar = (props: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [itemSelected, setItemSelected] = useState<string>('');

    const handleSelect = (val: string) => {
        setItemSelected(val);
    };

    const buttonData = useMemo(() => {
        return [
            {
                path: '',
                element: HomeIcon,
                text: 'For You',
            },
            {
                path: 'following',
                element: FollowingIcon,
                text: 'Following',
            },
            {
                path: 'explore',
                element: CompassIcon,
                text: 'Explore',
            },
            {
                path: 'live',
                element: CameraIcon,
                text: 'LIVE',
            },
        ];
    }, []);

    useEffect(() => {
        navigate(itemSelected);
    }, [itemSelected]);

    const handleSuggestMore = () => {};

    const handleFollowingMore = () => {};

    useEffect(() => {
        if (location.pathname.slice(1) !== itemSelected)
            setItemSelected(location.pathname.slice(1));
    }, [location.pathname]);

    return (
        <div className="sidebar">
            <ul className="sidebar__menu-container">
                {buttonData.map((val, index) => (
                    <li
                        key={index}
                        className="sider__menu-item"
                        onClick={() => handleSelect(val.path)}
                    >
                        {val.path === itemSelected ? (
                            <>
                                <val.element active />{' '}
                                <span className="sidebar__item-text sidebar__item-text--active">
                                    {val.text}
                                </span>
                            </>
                        ) : (
                            <>
                                <val.element />{' '}
                                <span className="sidebar__item-text">{val.text}</span>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <Divider />
            <div className="sidebar__account-list">
                <p className="sidebar__account-title">Suggested accounts</p>

                <ul>
                    {[1, 2].map((val, index) => (
                        <li key={index} className="sidebar__account-item">
                            <AccountCard
                                image={accoutLogo}
                                name={'theanh28entertainment'}
                                subname={'Theanh28 Entertainment'}
                            />
                        </li>
                    ))}
                </ul>
                <button className="sidebar__more" onClick={handleSuggestMore}>
                    See all
                </button>
            </div>
            <Divider />
            <div className="sidebar__account-list">
                <p className="sidebar__account-title">Following accounts</p>

                <ul>
                    {[1, 2].map((val, index) => (
                        <li key={index} className="sidebar__account-item">
                            <AccountCard
                                image={accoutLogo}
                                name={'theanh28entertainment'}
                                subname={'Theanh28 Entertainment'}
                            />
                        </li>
                    ))}
                </ul>
                <button className="sidebar__more" onClick={handleFollowingMore}>
                    See more
                </button>
            </div>
            <Divider />
            <div className="sidebar-footer">
                <div className="sidebar-footer__link-container">
                    {sidebarFooterLinkGroup1.map((val, index) => (
                        <Link key={index} to={val.path} target="_blank" rel="noopener noreferrer">
                            {val.text}
                        </Link>
                    ))}
                </div>
                <div className="sidebar-footer__link-container">
                    {sidebarFooterLinkGroup2.map((val, index) => (
                        <Link key={index} to={val.path} target="_blank" rel="noopener noreferrer">
                            {val.text}
                        </Link>
                    ))}
                </div>
                <div className="sidebar-footer__link-container">
                    {sidebarFooterLinkGroup3.map((val, index) => (
                        <Link key={index} to={val.path} target="_blank" rel="noopener noreferrer">
                            {val.text}
                        </Link>
                    ))}
                </div>
                <span className="sidebar-footer__copyright">© 2023 TikTok</span>
            </div>
        </div>
    );
};

export { SideBar };

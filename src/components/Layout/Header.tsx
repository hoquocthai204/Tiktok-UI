import mainAvatar from '@/assets/images/main_avatar.png';
import mainLogo from '@/assets/images/tiktok_logo.svg.png';
import { menuPopupData, menuPopupDataUnauth } from '@/constants/common/menuPopupData';
import { shortcutDataItem } from '@/constants/common/shortcutDataItem';
import { authState, setIsLoggedIn } from '@/features/auth/authSlice';
import LoginPopup from '@/features/auth/components/LoginPopup';
import Divider from '@mui/material/Divider';
import { Button, Modal, Popover } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    CloseIcon,
    EllipsisMenuIcon,
    InboxIcon,
    MessageHeaderIcon,
    PlusIcon,
    SearchHeaderIcon,
    TimeIcon,
} from '../Icons';

type Props = {};

const Header = (props: Props) => {
    const [inputContent, setInputContent] = useState<string>('');
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [openLoginPopup, setOpenLoginPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(authState).isLoggedIn;
    const [showShortcut, setShowShortcut] = useState(false);

    const handleCleanSearch = () => {
        setInputContent('');
    };

    const handleSelectMenu = (key: string) => {
        switch (key) {
            case 'logout':
                setShowLogoutModal(true);
                break;
            case 'profile':
                navigate('profile');
                break;
            case 'shortcut':
                setShowShortcut(true);
                break;
            default:
                break;
        }
    };

    const moreMenuContent = (
        <ul className="other-menu__option-container">
            {menuPopupData.map((e, index) => (
                <>
                    {e.divider && <Divider />}
                    <li
                        key={index}
                        className="other-menu__option"
                        onClick={() => handleSelectMenu(e.key)}
                    >
                        <e.icon />
                        <span>{e.text}</span>
                    </li>
                </>
            ))}
        </ul>
    );

    const moreMenuContentUnauth = (
        <ul className="other-menu__option-container">
            {menuPopupDataUnauth.map((e, index) => (
                <>
                    <li
                        key={index}
                        className="other-menu__option"
                        onClick={() => handleSelectMenu(e.key)}
                    >
                        <e.icon />
                        <span>{e.text}</span>
                    </li>
                </>
            ))}
        </ul>
    );

    const handleLogout = () => {
        dispatch(setIsLoggedIn(false));
        setShowLogoutModal(false);
    };

    const handleLogin = () => {
        setOpenLoginPopup(true);
    };

    const handleUpload = () => {
        !isLoggedIn ? setOpenLoginPopup(true) : navigate('upload');
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
                <button className="header-option header-option__button" onClick={handleUpload}>
                    <PlusIcon /> Upload
                </button>

                {isLoggedIn ? (
                    <>
                        <MessageHeaderIcon className="header-option header-option__message" />
                        <InboxIcon className="header-option header-option__inbox" />
                        <Popover
                            content={moreMenuContent}
                            placement="bottomRight"
                            className="header-option header-option__more-menu"
                        >
                            <img src={mainAvatar} alt="avatar" />
                        </Popover>
                    </>
                ) : (
                    <>
                        <Button
                            className="header-option header-option__button--red"
                            onClick={handleLogin}
                        >
                            Log in
                        </Button>
                        <Popover
                            content={moreMenuContentUnauth}
                            placement="bottomRight"
                            className="header-option header-option__more-menu--unauth"
                        >
                            <EllipsisMenuIcon className="header-option header-option__other-menu" />
                        </Popover>
                    </>
                )}
            </div>

            <Modal
                open={showLogoutModal}
                onOk={() => setShowLogoutModal(false)}
                onCancel={() => setShowLogoutModal(false)}
                centered
                className="header__logout-container"
            >
                <p className="header__logout-title">Are you sure you want to log out?</p>
                <div className="header__logout-options">
                    <button onClick={() => setShowLogoutModal(false)}>Cancel</button>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </Modal>

            <LoginPopup setOpen={setOpenLoginPopup} open={openLoginPopup} />

            <Modal
                open={showShortcut}
                onOk={() => setShowShortcut(false)}
                onCancel={() => setShowShortcut(false)}
                centered
                className="header-shortcut"
                footer={[]}
                closeIcon={<CloseIcon className={'header-shortcut__close-btn'} />}
            >
                <p className="header-shortcut__title">Keyboard shortcuts</p>
                <ul className="header-shortcut__items-container">
                    {shortcutDataItem.map((e) => (
                        <li key={e.key} className="header-shortcut__item">
                            {e.content}
                            <e.icon />
                        </li>
                    ))}
                </ul>
            </Modal>
        </div>
    );
};

export { Header };

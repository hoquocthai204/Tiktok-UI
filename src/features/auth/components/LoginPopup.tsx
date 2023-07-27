import { BackIcon, CloseIcon } from '@/components/Icons';
import { loginOptions } from '@/constants/auth/loginOptions';
import { Modal } from 'antd';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface LoginPopupProps {
    setOpen: (val: boolean) => void;
    open: boolean;
}

const LoginPopup: React.FunctionComponent<LoginPopupProps> = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showQrCode, setShowQrCode] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleLogin = (val: string) => {
        switch (val) {
            case 'qr-code':
                setShowQrCode(true);
                break;

            default:
                break;
        }
    };

    const handleClick = () => {
        !isSignup && setShowQrCode(false);
        setIsSignup(!isSignup);
    };

    const handleCancel = () => {
        setOpen(false);
        setIsSignup(false);
        setShowQrCode(false);
    };

    const handleSignup = (val: string) => {};

    const handleBack = () => {
        setShowQrCode(false);
    };

    return (
        <Modal
            centered
            open={open}
            closeIcon={<CloseIcon className={'login__close-btn'} />}
            onOk={() => setOpen(false)}
            onCancel={handleCancel}
            className="login"
            footer={[]}
        >
            {showQrCode && <BackIcon className="login__back-btn" onClick={handleBack} />}
            {!isSignup ? (
                !showQrCode ? (
                    <div className="login-container">
                        <h2 className="login__header">Log in to TikTok</h2>
                        <ul className="login__option-container">
                            {loginOptions.map((e) => (
                                <li
                                    key={e.key}
                                    className="login__option"
                                    onClick={() => handleLogin(e.key)}
                                >
                                    <e.icon /> {e.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="login-container">
                        <h2 className="login__header">Log in with QR code</h2>
                        <div className="login__code-container">
                            <QRCodeCanvas
                                className="login__qr-img"
                                style={{ width: '100px', height: '100px' }}
                                value="https://reactjs.org/"
                            />
                        </div>
                        <div className="login__code-step-desc">
                            <p className="login__step">1. Scan with your mobile device’s camera</p>
                            <p className="login__step">2. Confirm login or sign up</p>
                        </div>
                    </div>
                )
            ) : (
                <div className="login-container">
                    <h2 className="login__header">Sign up for TikTok</h2>
                    <ul className="login__option-container">
                        {loginOptions.map(
                            (e, index) =>
                                index > 0 && (
                                    <li
                                        key={e.key}
                                        className="login__option"
                                        onClick={() => handleSignup(e.key)}
                                    >
                                        <e.icon /> {e.title}
                                    </li>
                                ),
                        )}
                    </ul>
                </div>
            )}
            {!showQrCode && (
                <p className="login__policy-desc">
                    By continuing, you agree to TikTok’s{' '}
                    <Link to={'terms-of-use'}>Terms of Service</Link> and confirm that you have read
                    TikTok’s <Link to={'privacy-policy'}>Privacy Policy</Link>.
                </p>
            )}

            <div className="login__other-option">
                {!isSignup ? (
                    <span>
                        Don’t have an account?{' '}
                        <Link to={location.pathname} onClick={handleClick}>
                            Sign up
                        </Link>
                    </span>
                ) : (
                    <span>
                        Already have an account?{' '}
                        <Link to={location.pathname} onClick={handleClick}>
                            Log in
                        </Link>
                    </span>
                )}
            </div>
        </Modal>
    );
};

export default LoginPopup;

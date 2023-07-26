import { FacebookIcon, GoogleIcon, QrIcon, TwitterIcon, UserIcon } from '@/components/Icons';

export const loginOptions = [
    {
        key: 'qr-code',
        title: 'Use QR code',
        icon: QrIcon,
    },
    {
        key: 'user',
        title: 'Use phone / email / username',
        icon: UserIcon,
    },
    {
        key: 'facebook',
        title: 'Continue with Facebook',
        icon: FacebookIcon,
    },
    {
        key: 'google',
        title: 'Continue with Google',
        icon: GoogleIcon,
    },

    {
        key: 'twitter',
        title: 'Continue with Twitter',
        icon: TwitterIcon,
    },
];

import {
    LikeShortcutIcon,
    MuteShortcutIcon,
    NextShortcutIcon,
    PreviousShortcutIcon,
} from '@/components/Icons';

export const shortcutDataItem = [
    {
        key: 'previous',
        icon: PreviousShortcutIcon,
        content: 'Go to previous video',
    },
    {
        key: 'next',
        icon: NextShortcutIcon,
        content: 'Go to next video',
    },
    {
        key: 'like',
        icon: LikeShortcutIcon,
        content: 'Like video',
    },
    {
        key: 'mute',
        icon: MuteShortcutIcon,
        content: 'Mute / unmute video',
    },
];

import exapleImg from '@/assets/images/main_avatar.png';
import * as React from 'react';
import ListScrollMenu, { MenuItem } from '../components/ListScrollMenu';

interface ExplorePageProps {}

const menuItems: MenuItem[] = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
    // Add more items as needed
];

const ExplorePage: React.FunctionComponent<ExplorePageProps> = (props) => {
    return <>Coming soon</>;
};

export default ExplorePage;

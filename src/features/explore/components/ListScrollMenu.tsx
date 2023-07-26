import { Button } from 'antd';
import * as React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

interface ListScrollMenuProps {
    menuItems: MenuItem[];
}

export interface MenuItem {
    id: number;
    label: string;
}

const ListScrollMenu: React.FunctionComponent<ListScrollMenuProps> = ({ menuItems }) => {
    const Menu = (list: MenuItem[]) =>
        list.map((item) => (
            <div className="menu-item" key={item.id}>
                {item.label}
            </div>
        ));
    return (
        <ScrollMenu
            RTL
            itemClassName="scroll-menu__item"
            LeftArrow={<Button>left</Button>}
            RightArrow={<Button>right</Button>}
        >
            {Menu(menuItems)}
        </ScrollMenu>
    );
};

export default ListScrollMenu;

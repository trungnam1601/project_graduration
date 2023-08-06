import React, { useState } from 'react';

//mui

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MovieIcon from '@mui/icons-material/Movie';
import Toolbar from '@mui/material/Toolbar';

//
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { Fragment } from 'react';

const drawerWidth = 240;

function Sidebar(props) {
    const { window, onOpenDrawer, open } = props;

    const handleDrawerToggle = () => {
        onOpenDrawer();
    };

    const navLinkClass = ({ isActive }) => {
        return isActive ? 'active nav-link' : 'nav-link';
    };

    const [menu] = useState([
        {
            name: 'Quản Lý Phim',
            url: '/admin/film',
        },
        {
            name: 'Quản Lý Người Dùng',
            url: '/admin/user',
        },
        {
            name: 'Quản Lý Lịch Chiếu',
            url: '/admin/schedule',
        },
        {
            name: 'Quản Lý Hóa Đơn',
            url: '/admin/hoa-don',
        },
        {
            name: 'Quản Lý Thể Loại Phim',
            url: '/admin/category',
        },
        {
            name: 'Quản Lý Phòng Chiếu',
            url: '/admin/room',
        },
    ]);

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Fragment>
            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    {menu.map((item, index) => (
                        <NavLink key={index} to={item.url} className={navLinkClass}>
                            <ListItem
                                sx={{
                                    '& .css-10hburv-MuiTypography-root': {
                                        fontSize: 16,
                                    },
                                }}
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <MovieIcon fontSize="large" />
                                        ) : (
                                            <PersonIcon fontSize="large" />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <Toolbar />
                <Divider />
                <List>
                    {menu.map((item, index) => (
                        <NavLink key={index} to={item.url} className={navLinkClass}>
                            <ListItem
                                sx={{
                                    '& .css-10hburv-MuiTypography-root': {
                                        fontSize: 16,
                                    },
                                }}
                                key={index}
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <MovieIcon fontSize="large" />
                                        ) : (
                                            <PersonIcon fontSize="large" />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Drawer>
        </Fragment>
    );
}

export default Sidebar;

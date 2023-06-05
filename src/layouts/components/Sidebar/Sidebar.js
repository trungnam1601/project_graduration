import React, { useState } from 'react';

//mui
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MovieIcon from '@mui/icons-material/Movie';
//
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
function Sidebar({ open, onClose }) {
    const theme = useTheme();

    const handleDrawerClose = () => {
        onClose();
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

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
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
                                    {index % 2 === 0 ? <MovieIcon fontSize="large" /> : <PersonIcon fontSize="large" />}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;

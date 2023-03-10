import React, { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import { Avatar, Badge, InputBase, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Flex from "./Flex"
import { useTheme } from "@mui/material";

const Navbar = () => {
    const { colors, mode, dispatch, actionTypes, isMobile, open, setOpen, isLarge } = useGlobalProvider();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);


    return (
        <Box sx={{
            flexGrow: 1,
            position: "sticky",
            width: "100%",
            top: 0,
            zIndex: 1000,
            left: 0,
            bgcolor: mode === "dark" ? colors.primary[800] : '#fcfcfc'
            // bgcolor: colors.primary[500]
        }}>
            <AppBar position="static" sx={{
                background: 'transparent',

            }}>
                <Toolbar sx={{
                    justifyContent: "space-between",

                }}>
                    <Flex >

                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                color: colors.grey[100]
                            }}

                        >
                            <MenuIcon sx={{
                                color: colors.black[200],

                            }} />
                        </IconButton>


                        <IconButton>
                            <Search sx={{
                                fontSize: "1.5rem",
                                color: colors.black[200]
                            }} />
                        </IconButton>

                    </Flex>
                    <Flex>

                        <IconButton onClick={() => dispatch({ type: actionTypes.CHANGE_THEME })}>
                            {mode === "dark" ? (
                                <DarkModeOutlinedIcon sx={{ color: colors.black[200] }} />
                            ) : (
                                <LightModeOutlinedIcon sx={{ color: colors.black[200] }} />
                            )}
                        </IconButton>

                        <IconButton>
                            <Badge color="secondary" variant="dot">
                                <NotificationsOutlinedIcon sx={{ color: colors.black[200] }} />

                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge color="warning" variant="dot">
                                <ChatBubbleOutlineOutlinedIcon sx={{ color: colors.black[200] }} />
                            </Badge>

                        </IconButton>
                        <Button onClick={handleClick} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: '.3rem'
                        }} >

                            <Avatar src="/avatar3.jpeg" sx={{
                                width: "1.5rem",
                                height: "1.5rem",
                                opacity: .8

                            }} />

                            <Typography sx={{
                                color: colors.black[200],
                                textTransform: 'none'
                            }}>
                                Hi,<Typography component="span" fontWeight="bold"> Janice</Typography>
                            </Typography>
                        </Button>

                    </Flex>
                    <Menu
                        anchorEl={anchorEl}
                        open={isOpen}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    >
                        <MenuItem >Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navbar;

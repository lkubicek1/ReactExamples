import React, {useEffect, useState} from 'react';
import './App.css';
import theme from './theme';

import {
    AppBar, CssBaseline, Drawer, IconButton, ThemeProvider, Toolbar, Typography,
    styled, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    MenuIcon, HomeIcon, LibraryBooksIcon, ContactMailIcon
} from './components/MuiComponents';

import {BrowserRouter, Routes, Route, LinkProps, Link} from "react-router-dom";

import {ProfileContent} from "./models/ProfileContent";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    const [open, setOpen] = useState(false);
    const [profileContent, setProfileContent] = useState(new ProfileContent());

    // If you need to fetch or change the data dynamically, you can do so in useEffect.
    useEffect(() => {
        // For example, here we simply re-instantiate the ProfileContent, but you could replace this with API calls.
        setProfileContent(new ProfileContent());
    }, []);  // Empty dependency array means it runs once after the initial render.

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const routing = [
        {text: 'Home', route: '/', icon: <HomeIcon/>},
        {text: 'Portfolio', route: '/portfolio', icon: <LibraryBooksIcon/>},
        {text: 'Contact', route: '/contact', icon: <ContactMailIcon/>}
    ];

    const ButtonLink = styled((props: LinkProps) => <Link {...props} />)(({theme}) => ({
        color: theme.palette.text.primary,
        textDecoration: 'none',
    }));


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Developer's Portfolio
                    </Typography>
                    <IconButton edge="end" onClick={handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <BrowserRouter>


                <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
                    <List>
                        {routing.map(menuItem => (
                            <ListItem key={menuItem.text} disablePadding>
                                <ListItemButton component={ButtonLink} to={menuItem.route} onClick={handleDrawerToggle}>
                                    <ListItemIcon>
                                        {menuItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Routes>
                    <Route path="/" element={<Profile profileContent={profileContent}/>}/>
                    <Route path="/portfolio" element={<Portfolio projectCount={15}/>}/>
                    <Route path="/contact" element={<Contact profileContent={profileContent}/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )

}

export default App;

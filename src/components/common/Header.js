import * as React from "react";
import { Link } from "gatsby";
import { AppBar, Box, Divider, Drawer, IconButton, List, Toolbar, Button, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Assets/images/Header_logo.svg";
import "../../styles/common/Header.scss";

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ py: { xs: 2, lg: 0 } }}>
                <Link to="/">
                    <img loading="lazy" src={Logo} alt="Logo_picture" />
                </Link>
            </Box>
            <Divider />
            <List>
                <Box sx={{ display: "flex", flexDirection: "column", pt: 3 }}>
                    <Link to="/about" className="text_underline">
                        <Button className={`${"header_items"} `} sx={{ my: 1.5 }}>
                            About Us
                        </Button>
                    </Link>
                    <Link to="/pricing" className="text_underline">
                        <Button className={`${"header_items"} `} sx={{ my: 1.5 }}>
                            Pricing
                        </Button>
                    </Link>
                    <Link to="/features" className="text_underline">
                        <Button className={`${"header_items"} `} sx={{ my: 1.5 }}>
                            Features
                        </Button>
                    </Link>
                    <Link to="/blog" className="text_underline">
                        <Button className={`${"header_items"} `} sx={{ my: 2 }}>
                            Blogs
                        </Button>
                    </Link>
                    <Link to="/contact-us" className="text_underline">
                        <Button className={`${"header_items"} `} sx={{ my: 1.5 }}>
                            Contact Us
                        </Button>
                    </Link>
                </Box>
            </List>
            <Grid className="header_button" item xs={2} sx={{ display: { xs: "block", sm: "none", md: "block", lg: "none" } }}>
                <Button className="header_btn_t">Sign In</Button>
            </Grid>
            <Grid className="header_button" item xs={2} sx={{ display: { xs: "block", sm: "none", md: "block", lg: "none" } }}>
                <Button className="header_btn_p">FREE TRIAL</Button>
            </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header">
            <AppBar className="appBar" component="nav">
                <Container>
                    <Toolbar className="toolBar">
                        <Grid item xs={2}>
                            <Link to="/">
                                <img loading="lazy" src={Logo} className="logo" alt="Logo_picture" />
                            </Link>
                        </Grid>
                        <Grid item xs={6} sx={{ mx: "auto" }}>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <Box sx={{ px: { md: 3.6, lg: 3 } }}>
                                    <Link className={`${"header_items"} `} to="/about" activeStyle={{ fontWeight: "700" }}>
                                        About Us
                                    </Link>
                                </Box>
                                <Box sx={{ px: { md: 3.6, lg: 3 } }}>
                                    <Link to="/pricing" className={`${"header_items"} `} activeStyle={{ fontWeight: "700" }}>
                                        Pricing
                                    </Link>
                                </Box>
                                <Box sx={{ px: { md: 3.6, lg: 3 } }}>
                                    <Link to="/features" className={`${"header_items"} `} activeStyle={{ fontWeight: "700" }}>
                                        Features
                                    </Link>
                                </Box>
                                <Box sx={{ px: { md: 3.6, lg: 3 } }}>
                                    <Link to="/blog" className={`${"header_items"} `} activeStyle={{ fontWeight: "700" }}>
                                        Blogs
                                    </Link>
                                </Box>
                                <Box sx={{ px: { md: 3.6, lg: 3 } }}>
                                    <Link to="/contact-us" className={`${"header_items"} `} activeStyle={{ fontWeight: "700" }}>
                                        Contact Us
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, mr: 1 }}>
                            <Button className="header_btn_t">Sign In</Button>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, mr: { sm: 2, md: 0 } }}>
                            <Button className="header_btn_p">FREE TRIAL</Button>
                        </Grid>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { lg: "none" } }}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "auto", height: "100vh" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;

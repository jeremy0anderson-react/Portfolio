import {AppBar, Toolbar, Divider, IconButton, Typography, Box, Button, List, ListItemButton} from "@mui/material";
import {Component} from "react";
import {PropTypes} from "prop-types";
import {Menu} from "@mui/icons-material";
import {Link} from 'react-router-dom';

class Navbar extends Component{

    constructor(props) {
        super(props);

        this.props = props;
        this.state={
            menuOpen: this.props.menuOpen
        }

    }

    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props === nextProps || this.state === nextState || this.context === nextContext)
            return false
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
        console.log(this.props);
        console.log(this.context);
    }


    componentWillUnmount() {

    }


    render(){
        return(
            <Box>
                <AppBar
                    color={"primary"}
                    sx={{flexGrow: 1}}
                >
                    <Toolbar>
                        <IconButton
                            sx={{color: "white", display: {xs: "flex",sm: "none", md: "none",lg:"none"}}}
                            onClick={this.props.onMenuToggle}
                        >
                            <Menu/>
                        </IconButton>
                        <Box
                            sx={{
                                display: "flex",
                                width: "auto",
                                justifyContent:"center",
                                position: "fixed",
                                left: "calc(50vw - 87.5px)"
                            }}
                        >
                            <Typography
                                sx={{width: "175px", display: "flex", justifyContent:"center"}}
                            >
                                {this.props.title}
                            </Typography>
                        </Box>
                        <Box sx={{display:"flex", justifyContent:"right", width: "100%"}}>
                            <List sx={{display: {xs: "none",sm: "flex", md: "flex",lg:"flex"}}}>
                                {this.props.menuItems.map(({text, to}, index)=>{
                                    return(
                                        <ListItemButton
                                            key={text+index}
                                            component={Link}
                                            to={`/${to}`}
                                            onClick={this.props.onLinkClick}
                                            variant={"text"}
                                            color={"inherit"}
                                        >
                                            {text}
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Box>
                        {this.props.children}
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}
Navbar.propTypes = {
    onMenuToggle:PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired
}

export default Navbar;
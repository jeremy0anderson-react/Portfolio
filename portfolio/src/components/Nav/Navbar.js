import {AppBar, Toolbar, Divider, IconButton, Typography, Box} from "@mui/material";
import {Component} from "react";
import {PropTypes} from "prop-types";
import {Menu} from "@mui/icons-material";



class Navbar extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.children={props};
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
                            sx={{color: "white"}}
                            onClick={this.props.onMenuToggle}
                        >
                            <Menu/>
                        </IconButton>
                        {this.props.children}
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}
Navbar.propTypes = {
    onMenuToggle:PropTypes.func.isRequired,
}

export default Navbar;
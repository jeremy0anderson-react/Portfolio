import {Component} from "react";
import {PropTypes} from "prop-types";
import {Box, Drawer, List, ListItemButton} from "@mui/material";
import {Link} from "react-router-dom";


class SideMenu extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            open: this.props.open,
        }
    }



    render(){
        return(
            <Box>
                <Drawer
                    anchor={"left"}
                    SlideProps={{
                        direction: "right"
                    }}
                    open={this.props.open}
                    onClose={this.props.onClose}
                >
                    <List>
                        {this.props.menuItems.map(({text, icon, to}, index)=>{
                            return(
                                <ListItemButton
                                    key={text+index}
                                    component={Link}
                                    to={`/${to}`}
                                    onClick={this.props.onClose}
                                >
                                    {icon}
                                    {text}
                                </ListItemButton>
                            )
                        })}
                    </List>
                </Drawer>
            </Box>
        )
    }



}

SideMenu.propTypes={
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired
}

export default SideMenu;
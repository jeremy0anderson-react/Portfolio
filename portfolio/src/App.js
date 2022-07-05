import {Box, Button, Divider, Typography} from '@mui/material';
import {Home, HomeOutlined, MailOutlined, Menu, PersonOutlined} from '@mui/icons-material';
import {useState} from "react";
import {Routes, Route} from 'react-router-dom';

//Components

import Navbar from "./components/Nav/Navbar";
import SideMenu from "./components/Nav/Menu";
import Contact from "./components/Contact/Contact";


//Config
const menuItems =  [{
        text: "Home",
        to: "home",
        icon: <HomeOutlined size={30}/>
    },
    {
        text: "About",
        to: "about",
        icon: <PersonOutlined size={30}/>
    },
    {
        text: "Contact",
        to:"contact",
        icon: <MailOutlined size={30}/>
    }
]



function App() {
    const [menu, setMenu] = useState(false);



  return (
      <Box className={"App"}>
          <Navbar
              onMenuToggle={()=>{setMenu(!menu)}}
          >
                <Typography>

                </Typography>
          </Navbar>
          {/* end nav */}

          <Box className="App-content"
               sx={{paddingTop: "80px"}}
          >
              <SideMenu
                  open={menu}
                  onClose={()=>{setMenu(!menu)}}
                  menuItems={menuItems}
              >

              </SideMenu>
          </Box>


          {/* Routes*/}
          <Routes>
              <Route path={"/"} element={<Divider/>}/>
              <Route exact path={"/home"} element={<Divider/>}/>
              <Route exact path={"/about"} element={<Divider/>}/>
              <Route exact path={"/contact"} element={<Contact/>}/>
          </Routes>



      </Box>
  );
}

export default App;

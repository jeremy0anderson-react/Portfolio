import {Box, Button, Divider, Typography} from '@mui/material';
import {Home, HomeOutlined, MailOutlined, Menu, PersonOutlined} from '@mui/icons-material';
import {useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom';

//Components

import Navbar from "./components/Nav/Navbar";
import SideMenu from "./components/Nav/Menu";
import Contact, {Live} from "./components/Contact/Contact";


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
function formatTitle(titleString){
    let toReplace = titleString.split("/")[1].charAt(0);
    return titleString = titleString.replace(toReplace, toReplace.toUpperCase());

}



function App() {
    const [menu, setMenu] = useState(false);


    //helper for title format
    let titleString = document.location.pathname;

    const [title, setTitle] = useState(formatTitle(window.document.location.pathname));

    useEffect(()=>{
        document.addEventListener("DOMContentLoaded", ()=>{
            setTitle(formatTitle(titleString));
            console.log(title);
        })
    },[setTitle])

  return (
      <Box className={"App"}>
          <Navbar
              onMenuToggle={()=>{setMenu(!menu)}}
              menuItems={menuItems}
          >
          </Navbar>
          {/* end nav */}

          <Box className="App-content"
               sx={{paddingTop: "80px"}}
          >
              <SideMenu
                  open={menu}
                  onClose={()=>{setMenu(!menu)}}
                  menuItems={menuItems}
                  title={title}
              >

              </SideMenu>
          </Box>


          {/* Routes*/}
          <Routes>
              <Route path={"/"} element={<Divider/>}/>
              <Route exact path={"/home"} element={<Divider/>}/>
              <Route exact path={"/about"} element={<Divider/>}/>
              <Route exact path={"/contact"} element={<Contact/>}/>
              <Route path={"/contact/live"} element={<Live/>}/>
          </Routes>



      </Box>
  );
}

export default App;

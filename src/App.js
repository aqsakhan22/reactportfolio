import React,{useState} from "react";

import Topbar from "./components/topbar/Topbar.js";
import Intro from './components/intro/Intro.js'
import Portfolio from './components/portfolio/Portfolio.js'
import Works from './components/works/Works.js'
import Testimonials from './components/testimonials/Testimonials.js'
import Contact from './components/contact/Contact.js'
import Menu from "./components/menu/Menu.js";
import './app.css'

const App=()=>{

    const [menuOpen,setmenuOpen]=useState(false)
    return(
        <div className="app">
     
         <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
         <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
         
        <div className="sections">
        
       
           
        <Intro/>
         <Portfolio/>
         <Works/>

         <Testimonials/>
         <Contact/>
         

        </div>
       

    
        </div>
    )

}
export default App;
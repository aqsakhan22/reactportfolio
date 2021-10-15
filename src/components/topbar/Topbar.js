import React from 'react'

import {Person,Mail,Menu,Close} from '@material-ui/icons'

import './topbar.css'

const  Topbar=({menuOpen,setmenuOpen})=> {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrappertopbar">
            <div className="topbarleft">
             {/* <a href="#intro" className="topbarlogo">AKTech</a> */}
             <div className="topbaritemContainer">
               <Person className="topbaricons"/>
               <span>+92xxxxxxx</span>
             </div>
             <div className="topbaritemContainer">
               <Mail className="topbaricons"/>
               <span>aqsakhan19966@gmail.com</span>
             </div>
              
           
            </div>
          
            <div className="topbarright">

          <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
     
        {/* {menuOpen? <Close className="menuicon" />:<Menu className="menuicon"/>} */}
    
       
        
          </div>
            </div>
            </div>
         
        </div>
    )
}
export default Topbar;

import React from 'react'
import './menu.css'

const Menu=({menuOpen,setmenuOpen})=>{
    return (
        <div className={"menuitem "+ (menuOpen && "menuactive")}>
            <ul className="menuul">
                <li className="menuli"  onClick={()=>setmenuOpen(false)}><a href="#intro">home</a></li>
                <li  onClick={()=>setmenuOpen(false)}><a href="#portfolio" className="menua">portfolio</a></li>
                <li  onClick={()=>setmenuOpen(false)}><a href="#works" className="menua">works</a></li>
                <li  onClick={()=>setmenuOpen(false)}><a href="#testimonials" className="menua">testimonials</a></li>
                <li  onClick={()=>setmenuOpen(false)}><a href="#contact" className="menua">contact</a></li>
               
               
            </ul>
            
        </div>
    )
}
export default Menu

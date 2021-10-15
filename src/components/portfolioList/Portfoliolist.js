import React from 'react'
import './Portfoliolist.css'
//rafce
const Portfoliolist = ({title,active, setselected,id}) => {


    console.log(active,title,id)
    return (
        // <li key={id} className={active ? "Portfoliolist active" : "Portfoliolist"  }
        //  onClick={()=>setselected(id)}
        
        // >
        <li className={active  ? "Portfoliolist active" : "Portfoliolist"} onClick={()=>setselected(id)} >

         {title}
        </li>
    )
}

export default Portfoliolist;

import React,{useState,useEffect} from "react";
import "./works.css";

import arrow from '../../images/arrow.png'
import { work } from "../../works.js";


const Works = () => {
 
  // const [data,setdata]=useState(work)
  const [current,setcurrent]=useState(0)
  console.log(current)
  
 const changeslide =(checkslide)=>{
   
 
   checkslide === 'left' ? setcurrent(current > 0 ? current - 1: 2 )
   
   : 

   setcurrent(current <  work.length - 1 ? current + 1: 0)


   console.log(current)
 }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${current * 100}vw)`}}>
   {
    work.map((d)=>{

      return(
        <div className="containerwork" key={d.id} >
      <div className="containeritem">
        <div className="workleft">
          <div className="leftcontainer">
            <div className="imgcontainer">
              <img src={d.img} alt="" />
            </div>
            <h2>{d.title}</h2>
            <p>{d.para}
            </p>
            <span>projects</span>
          </div>
        </div>
        <div className="workright">
          <img src={d.img} alt=""/>
        </div>
      </div>










    </div>
      )
     })
   }
         {/* container end  */}
      </div>
      <img src={arrow} className="arrow arrowleft" onClick={()=>changeslide("left")}/>
      <img src={arrow} className="arrow arrowright" onClick={()=>changeslide("right")}/>
    </div>
  );
};
export default Works;

import React,{useEffect,useRef} from "react";
import img1 from "../../images/man.png";
import img2 from "../../images/down-chevron.png";
import { init } from 'ityped'
  


import "./intro.css";
const Intro = () => {
    const textRef=useRef();
    
    useEffect(()=>
        
        {
            init(textRef.current, 
                
                { showCursor: true,  typeSpeed:  100, strings: ['UI/UX Designer', 'React Js Developer' ] })

        }
        ,[]);
  return (
    <div className="intro" id="intro">
      <div className="leftintro">
        <div className="imgContainer">
          <img src={img1} />
        </div>
      </div>
      <div className="rightintro">
        <div className="wrapperintro">
            <h2>Hi There, I'm</h2>
            <h1>Aqsa khan</h1>
            <h3>Software Engineer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
            <img src={img2}/>
        </a>
      </div>
    </div>
  );
};
export default Intro;

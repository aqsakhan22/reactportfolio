import React,{useState,useEffect} from 'react'
import './portfolio.css'
import Portfoliolist from '../portfolioList/Portfoliolist'
import  {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data.js";

const Portfolio=()=>{

    const [selected,setselected]=useState('featured')
    console.log(selected)
    const [data1,setdata]=useState([])
    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];
      useEffect(()=>{
     switch(selected){
     case 'featured':
     setdata(featuredPortfolio);
     break;
     
     case 'web':
         setdata(webPortfolio)
     break;
     case 'mobile':
         setdata(mobilePortfolio)
     break;
     case 'design':
         setdata(designPortfolio)
     break;

     case 'content':
        setdata(contentPortfolio)
    break;
    default: setdata(featuredPortfolio)
    
   

     }
      },[selected])
    return (
        <div className="portfolio" id="portfolio">
           <h1>Portfolio</h1>
           <ul className="portfolioul">

             {/* <li>home</li>
             <li>brand</li>
             <li>design</li>
             <li>ui ux</li>
             <li>react</li> */}
              {
                   list.map(item=>(
                    <Portfoliolist
                     title={item.title}
                      active={
                          selected === item.id
                         }
                         setselected={setselected}
                         id={item.id}
                         />

                   )
                    
                    )
               }
              s
           </ul>
           <div className="containerport">
       {
                  data1.map((d)=>{
                    return(
                        <div className="item" key={d.id}>

               
                        <img src={d.img}/>
                        <h3>{d.title}</h3>
                    </div>

                    )
                   
                       

                   })
               }  

                 


                       

                  
               
              
             

           </div>
        </div>
    )
}
export default Portfolio;
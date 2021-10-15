import React from "react";
import "./testimonials.css";
import arrow from "../../images/right-arrow.png";
import youtube from "../../images/youtube.png";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "../../images/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "../../images/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "../../images/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testh1">Testimonials</h1>
      <div className="containertest">
   {
     data.map((d)=>{

      return(
        <div className= {d.featured ? "cardtest featured":  "cardtest"}>
      <div className="toptest">
        <img src={arrow} className="leftimg" />
        <img
          className="userimg"
          src={d.img}
        />
        <img src={youtube} className="rightimg" />
      </div>
      <div className="centertest">
      {d.desc}
      </div>
      <div className="bottomtest">
        <h3>{d.name}</h3>
        <h4>{d.title}</h4>
      </div>
    </div>
      )
     })
   }
      </div>
    </div>
  );
};
export default Testimonials;

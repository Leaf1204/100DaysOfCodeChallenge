import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
//import ReactDOM from 'react-dom';

import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

gsap.registerPlugin(Draggable);

const testimonials = [
  {
    name: "image1",
    title: "Author/Poet",
    image: `https://i.imgur.com/eClRomj.png`,
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
  },
  {
    name: "image2",
    image: `https://i.imgur.com/EuZiVwU.png`,
    quote:
      "Positive thinking will let you do everything better than negative thinking will."
  },
  {
    name: "image3",
    image: `https://i.imgur.com/wx36biP.png`,
    quote:
      "If opportunity doesn’t knock, build a door."
  },
  {
    name: "image4",
    image: `https://i.imgur.com/oSFa6vM.png`,
    quote:
    "You always pass failure on the way to success."
  }
];


var numSlides = testimonials.length;
console.log(numSlides);
const proxy = document.createElement("div");
//ReactDOM.render(<div/>, document.getElementById('root'));
var currentIndex = 0;

function Slider() {
  
  var slideDuration = 0.3;
  const sliderRef = useRef([]);
  sliderRef.current = [];
  var progressWrap = gsap.utils.wrap(0, 1);
  var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
  var slideAnimation = gsap.to({}, {});
  
  useEffect(() => {
    var norm = (gsap.getProperty(proxy, "x") / sliderRef.current[currentIndex].offsetWidth * numSlides) || 0;
    gsap.set(proxy, {
      x: norm * sliderRef.current[currentIndex].offsetWidth * numSlides
    });
    
    animateSlides(0);
    slideAnimation.progress(1);
  }, [])

  useEffect(()=>{
    gsap.set(sliderRef.current, {
      xPercent: i => i * 100
    });
  },[]);
  
  const nextSlide =  () => {
    console.log('next slide');
    animateSlides(-1);
  }
  
  const prevSlide = () => {
    console.log('prev slide');
    animateSlides(1);
  }
  
  
  
  const addToRefs = (el) =>{
    if(el && !sliderRef.current.includes(el)){
      sliderRef.current.push(el);
      console.log(el);
    }
  }
function animateSlides(direction) {
  
  // todo : your array is empty, but why?
  console.log(sliderRef.current[currentIndex].offsetWidth);
  slideAnimation.kill();
  var snapX = gsap.utils.snap(sliderRef.current[currentIndex].offsetWidth);
  var x = snapX(gsap.getProperty(proxy, "x") + direction * sliderRef.current[currentIndex].offsetWidth); 
  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    onUpdate: updateProgress
  }); 

 
  
  
}

function updateProgress() { 
    gsap.to(sliderRef.current, {
      xPercent: "+=" + (numSlides * 100),
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
    xPercent: wrap
  } }).progress(progressWrap(gsap.getProperty(proxy, "x") / sliderRef.current[currentIndex].offsetWidth * numSlides));
}


  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul> 
            {
              testimonials ? testimonials.map((t, index) => (
                <li key={index}>
                  <img src={t.image} className='slide' ref={addToRefs} alt=""></img>
                </li>
              )) : null 
            }
            </ul>
          </div>

        </div>
        <div className="arrows right" onClick={nextSlide}>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
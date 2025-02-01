import React, { useState, useEffect } from "react";

const Textchange = () => {
  const [currText, setCurrText] = useState("I am a");
  const [endVal, setEndVal] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const texts = ["Competitive Programmer.", "FrontEnd Developer.", "BackEnd Developer."];
    
    const intervalId = setInterval(() => {
      if (isTyping) {

        setCurrText("I am a " + texts[index].substring(0, endVal));
        setEndVal((prev) => prev + 1); 
      } else {
        setCurrText("I am a " + texts[index].substring(0, endVal));
        setEndVal((prev) => prev - 1); 
      }

      if (endVal >= texts[index].length + 5) {
        setIsTyping(false);
      }

      if (endVal <= 0 && !isTyping) {
        setIsTyping(true);
        setIndex((prev) => (prev + 1) % texts.length); 
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, [endVal, isTyping, index]); 

  return (
    <div className="textChange">
      {currText}
    </div>
  );
};

export default Textchange;

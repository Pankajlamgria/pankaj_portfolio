import React, { useState, useEffect } from "react";

const Typewriter = ({ words, speed = 150, deleteSpeed = 100, pauseTime = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing phase
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        
        if (displayedText === currentWord) {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        setDisplayedText((prev) => currentWord.slice(0, prev.length - 1));
        
        if (displayedText === "") {
          // Move to the next word after deleting
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, words, speed, deleteSpeed, pauseTime, currentWordIndex]);

  return <span>{displayedText}</span>;
};  

export default Typewriter;

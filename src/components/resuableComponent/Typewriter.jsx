'use client';

import { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["Redefining Digital Evolution "];
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[index];
      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingInterval = setTimeout(type, 100);

    return () => clearTimeout(typingInterval); // Clean up timeout when component is unmounted or rerendered
  }, [charIndex, isDeleting, index, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h2 id="typewriter" className="text-lg md:text-3xl lg:text-4xl text-white text-opacity-70 font-bold">
        {currentWord}
      </h2>
    </div>
  );
};

export default Typewriter;

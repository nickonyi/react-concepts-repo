import React, { useEffect, useRef } from 'react';

function ButtonComponent() {
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = 'Hey, I am different';
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = 'Text me';
    }, 2000);
    return () => {
      clearInterval(timeout);
    };
  }, []);
  return <button ref={buttonRef}>click me!!</button>;
}

export default ButtonComponent;

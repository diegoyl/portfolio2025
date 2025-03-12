import { useRef, useEffect } from 'react';

function useVideoAutoSound(options) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  function cb(entries) {
    const [entry] = entries;
    let vidObject = document.getElementById(options.vidID)
    console.log("\tRunning VAS ",options.enabled)

    if (options.enabled){
      console.log("scrolled: ",window.scrollY)
      if (entry.isIntersecting) {
        setTimeout(() => {
          vidObject.muted = false;

        },500)
        console.log("\tunmuting'")
      }
      else { 
        vidObject.muted = true;
      }
    }

  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options, options.enabled]);

  return [containerRef, videoRef];
};

export { useVideoAutoSound };
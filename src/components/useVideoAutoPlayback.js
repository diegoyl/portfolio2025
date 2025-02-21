import { useRef, useEffect } from 'react';

function useVideoAutoPlayback(options) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  function cb(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) videoRef.current.play();
    else videoRef.current.pause();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
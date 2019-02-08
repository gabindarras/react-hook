import { useState, useEffect } from 'react';

export function useAppTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return width;
}

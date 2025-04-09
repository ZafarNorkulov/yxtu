import { useEffect, useState } from 'react';

const OnScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    });
  }, []);

  return scrollPosition
}

export default OnScroll;
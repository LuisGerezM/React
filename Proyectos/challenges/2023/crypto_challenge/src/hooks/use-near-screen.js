import { useEffect, useRef, useState } from 'react';

export function useNearScreen() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let prevIsIntersecting = false;
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting && !prevIsIntersecting) {
        setShow(true);
      } else if (!isIntersecting && prevIsIntersecting) {
        setShow(false);
      }

      prevIsIntersecting = isIntersecting;
    });

    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return [show, ref];
}

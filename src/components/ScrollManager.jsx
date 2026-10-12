import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function scrollInstantly(x, y) {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(x, y);
  root.style.scrollBehavior = previousScrollBehavior;
}

function scrollToHash(hash) {
  if (!hash || hash === '#') return false;

  let targetId;
  try {
    targetId = decodeURIComponent(hash.slice(1));
  } catch {
    targetId = hash.slice(1);
  }

  const target = document.getElementById(targetId);
  if (!target) return false;

  target.scrollIntoView();
  return true;
}

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const currentLocationRef = useRef(location);
  const previousLocationRef = useRef(location);
  const positionsRef = useRef(new Map());

  useLayoutEffect(() => {
    currentLocationRef.current = location;
  }, [location]);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const previousLocation = previousLocationRef.current;

    if (previousLocation.pathname !== location.pathname) {
      positionsRef.current.set(previousLocation.key, {
        x: window.scrollX,
        y: window.scrollY,
      });

      if (navigationType === 'POP') {
        const position = positionsRef.current.get(location.key);
        scrollInstantly(position?.x ?? 0, position?.y ?? 0);
      } else if (!scrollToHash(location.hash)) {
        scrollInstantly(0, 0);
      }
    }

    previousLocationRef.current = location;
  }, [location, navigationType]);

  useLayoutEffect(() => {
    const savePosition = () => {
      positionsRef.current.set(currentLocationRef.current.key, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', savePosition, { passive: true });
    return () => window.removeEventListener('scroll', savePosition);
  }, []);

  return null;
}

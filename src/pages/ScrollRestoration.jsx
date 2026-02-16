
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const positionsRef = useRef({});
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;

    const prevPath = prevPathRef.current;
    positionsRef.current[prevPath] = window.scrollY;

    if (navigationType === "POP") {
      window.scrollTo(0, positionsRef.current[currentPath] ?? 0);
    } else {
      window.scrollTo(0, 0);
    }

    prevPathRef.current = currentPath;
  }, [location.pathname, navigationType]);

  return null;
}

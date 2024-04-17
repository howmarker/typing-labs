import { useCallback, useEffect, useState } from "react";
function useCheckScrollY(targetY?:number) {
  const [isScroll, setIsScroll] = useState(false);
 
  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    if (window.scrollY > (targetY || 0)) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [setIsScroll,targetY]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  },[handleNavigation]);

  return isScroll
}

export default useCheckScrollY;

import { debounce } from "lodash";
import { useEffect, useState } from "react";


const useScrollAndScreen = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [screenLg, setScreenLg] = useState<boolean>(); 

  useEffect(() => {
    const handleScroll = debounce(() => {
      setHasScrolled(window.scrollY > 50);
    }); 

    const handleResize = debounce(() => {
      setScreenLg(window.innerWidth >= 370);
    });

    // Initial invocation to set states
    handleScroll();
    handleResize();

    // event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
 
    
    // Clean up 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return { hasScrolled, screenLg };
};

export default useScrollAndScreen;

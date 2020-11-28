import { useEffect, useRef} from "react";

const useClick = (onClick) => {
    // if (typeof onClick !== "function") {
    //   return;
    // }
    const element = useRef();
    useEffect(() => {
      // componentDidmount
      if(element.current) {
        element.current.addEventListener("click", onClick);
      }
      // componentWillUnDidmount
      return () => {
        if(element.current) {
          element.current.removeEventListener("click", onClick);
        }      
      }
    }, [])
    return element;
  }

  export default useClick;
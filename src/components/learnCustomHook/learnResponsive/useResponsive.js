import { useEffect, useState } from 'react'
import { useDebounce } from '../learnDebounce/useDebounce';

export const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });  
  const handleResponsive = () => {
    let isMobile = window.innerWidth <= 768;
    let isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    let isDesktop = window.innerWidth > 990;

    setState({ isMobile, isTablet, isDesktop });
  }  

  const debounced = useDebounce(handleResponsive, 500);

  const setUp = () => {
    window.addEventListener('resize', debounced);
  }

  const cleanUp = () => {
    window.addEventListener('resize', debounced);
  }

  useEffect(() => {
    handleResponsive();
    setUp();

    return () => {
        cleanUp();
    }
  }, []);

  return state;
}
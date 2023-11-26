import { useEffect, useState } from "react";
const SIZE_HORIZONTAL_SCROLL:number = 700;

export function useButtonScroll(){
    const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > SIZE_HORIZONTAL_SCROLL ?
        setShowBtn(true) : setShowBtn(false);
    })
  },[]);

  const goToTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  };

  return {
    showBtn,
    goToTop
  }
}
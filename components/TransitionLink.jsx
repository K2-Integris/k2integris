"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePageTransition } from "./PageTransitionContext";

const TransitionLink = ({ children, href, onClicked, ...props }) => {
  const router = useRouter();
  const { show, hide } = usePageTransition();

  const handleClick = async (e) => {
    e.preventDefault();
    show();
    
    onClicked?.()

    setTimeout(() => {
        router.push(href);
        
        
        setTimeout(() => {
            hide();
        }, 350)
    }, 300);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;

"use client";

import { motion, AnimatePresence, easeIn } from "framer-motion";
import { usePageTransition } from "./PageTransitionContext";
import Image from "next/image";

const variants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, transition: { duration: 0.3}, opacity: 1 },
  exit: { x: "-100vw", transition: { duration: 0.3 }, opacity: 0 },
};

const PageTransition = () => {
  const { isVisible } = usePageTransition();

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="page-transition-overlay"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
            <svg width="300" height="178" viewBox="0 0 300 178" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150.943 0L0 178H26.4151L150.943 32.1915L232.075 124.979L188.679 96.5745L179.245 109.83L147.17 77.6383L62.2641 162.851H77.3585L147.17 104.149L184.906 138.234L196.226 124.979L283.019 178H300L150.943 0Z" fill="#BC976F"/>
            </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;

// context/PageTransitionContext.jsx
"use client";

import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <PageTransitionContext.Provider value={{ isVisible, show, hide }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);

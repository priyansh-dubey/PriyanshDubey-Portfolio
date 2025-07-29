"use client";
import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface ScrollRevealStackProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollRevealStack({ children, delay = 0.1 }: ScrollRevealStackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
                delay,
              },
            }
          : {}
      }
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
}

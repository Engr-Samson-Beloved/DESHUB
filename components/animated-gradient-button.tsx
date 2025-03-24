"use client"

import type React from "react"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const AnimatedGradientButton = forwardRef<HTMLButtonElement, AnimatedGradientButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 items-center justify-center rounded-md px-8 py-2 font-medium text-white overflow-hidden",
          className,
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="absolute inset-0 creative-gradient opacity-90" />
        <span className="absolute inset-0 bg-[linear-gradient(45deg,var(--primary)_30%,transparent_60%)] opacity-50" />
        <motion.span
          className="absolute inset-0 creative-gradient opacity-0"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    )
  },
)

AnimatedGradientButton.displayName = "AnimatedGradientButton"


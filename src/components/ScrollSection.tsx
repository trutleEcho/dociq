"use client"

import { motion } from "framer-motion"
import * as React from "react"
import {JSX} from "react";

interface ScrollSectionProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof JSX.IntrinsicElements
    delay?: number
    once?: boolean
}

const ANIMATION_CONFIG = {
    initial: {opacity: 0, y: 24},
    animate: {opacity: 1, y: 0},
    viewport: {
        amount: 0.2,
        margin: "0px 0px -10% 0px"
    },
    transition: {
        duration: 0.6,
        ease: "easeOut" as const
    }
} as const

export const ScrollSection: React.FC<ScrollSectionProps> = ({
                                                                as = "section",
                                                                delay = 0,
                                                                once = true,
                                                                className,
                                                                children,
                                                                ...rest
                                                            }) => {
    const Component = motion[as as "section"] as typeof motion.section

    // Destructure to remove conflicting props
    const {
        onDrag,
        onDragStart,
        onDragEnd,
        onAnimationStart,
        onAnimationEnd,
        ...safeRest
    } = rest

    return (
        <Component
            initial={ANIMATION_CONFIG.initial}
            whileInView={ANIMATION_CONFIG.animate}
            viewport={{...ANIMATION_CONFIG.viewport, once}}
            transition={{...ANIMATION_CONFIG.transition, delay}}
            className={className}
            {...safeRest}
        >
            {children}
        </Component>
    )
}

export default ScrollSection
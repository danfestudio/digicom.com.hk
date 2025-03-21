"use client"
import React, { ReactNode } from 'react'
import { Variants, motion } from 'framer-motion'

interface AnimatedDivProps {
    children: ReactNode;
    className?: string;
    variant?: string;
    [key: string]: any; // Allow additional props
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, classname, variant, ...props }) => {

    const rtl: Variants = {
        offscreen: {
            x: 100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5
            }
        }
    };
    const ltr: Variants = {
        offscreen: {
            x: -100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5
            }
        }
    };
    const btt: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5
            }
        }
    };
    const ttb: Variants = {
        offscreen: {
            y: -100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5
            }
        }
    };
    const fadeIn: Variants = {
        offscreen: {
            y: 0,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 3
            }
        }
    };

    const small2big: Variants = {
        offscreen: {
            scale: 0.5,
            opacity: 0.5,
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 2
            }
        }
    };

    const big2small: Variants = {
        offscreen: {
            scale: 2.5,
            opacity: 0.5,
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 2
            }
        }
    };

    const none: Variants = {
        offscreen: {
            scale: 0,
            opacity: 1,
        },
        onscreen: {
            scale: 1,
            opacity: 1,
        }
    };

    const checkVariant = () => {
        switch (variant) {
            case 'none':
                return none
            case 'ltr':
                return ltr
            case 'rtl':
                return rtl
            case 'btt':
                return btt
            case 'ttb':
                return ttb
            case 'fadeIn':
                return fadeIn
            case 'small2big':
                return small2big
            case 'big2small':
                return big2small
            default:
                return btt
        }
    }

    return (
        <motion.div
            {...props}
            className={classname}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* <div className="splash" style={{ background }} /> */}
            < motion.div className={""} variants={checkVariant()} >
                {children}
            </motion.div >
        </motion.div >
    )
}

export default AnimatedDiv
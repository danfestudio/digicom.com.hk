import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react';

function Accordion({ i, expanded, setExpanded, header, body }: { i: number, expanded: boolean | number, setExpanded: any, header: any, body: any }) {

    const isOpen = i === expanded;

    return (
        <div className={`my-2 border-b borber-t ${isOpen ? "" : ""}`}>
            <motion.header
                className={`flex justify-between font-semibold p-3 px-4  ${isOpen ? "border-b" : ""}`}
                initial={false}
                animate={{ backgroundColor: isOpen ? "#ffffff" : "#ffffff" }}
                onClick={() => setExpanded(isOpen ? false : i)}
            >
                {header}
                {
                    isOpen ?
                        <ChevronUp />
                        :
                        <ChevronDown />
                }
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className='p-5 bg-white opacity-75'>
                            {body}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion
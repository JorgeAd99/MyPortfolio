"use client"

import {  transitionVariantsPages } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-custom-radial">
                <motion.div
                    variants={transitionVariantsPages}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;
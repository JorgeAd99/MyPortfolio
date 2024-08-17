'use client'
import { fadeIn } from '@/utils/motion-transitions';
import {motion } from 'framer-motion';
interface MotionTransitionProps {
    children : React.ReactNode,
    position : 'right' | 'botton',
    className ?: string
}

const MotionTransition = (props : MotionTransitionProps) => {
    const{ children, className, position } = props
    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
};
export default MotionTransition
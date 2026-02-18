'use client';

import { motion } from 'motion/react';
import React from 'react';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    type?: 'fade' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale';
}

export default function AnimatedWrapper({
    children,
    delay = 0,
    className = '',
    type = 'fade',
}: AnimatedWrapperProps) {
    const getVariants = () => {
        switch (type) {
            case 'slide-up':
                return {
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'slide-in-left':
                return {
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'slide-in-right':
                return {
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                };
            case 'scale':
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                };
            case 'fade':
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
}

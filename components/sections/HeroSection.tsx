'use client';

import React from 'react';
import { PawPrint } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

export default function HeroSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/16395147/pexels-photo-16395147.jpeg)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <AnimatedWrapper type="slide-up">
                    <div className="flex justify-center mb-6">
                        <PawPrint className="w-16 h-16 text-[#d4a5a5]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold leading-tight">
                        Loving, Reliable Dog Sitting by Sisters Who Treat Your Dog Like Family
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
                        Personalized care, safe walks, cozy house sitting, and happy tails guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToContact}
                            className="bg-[#8b6f47] hover:bg-[#6f5838] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book a Service
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="bg-white/90 hover:bg-white text-[#3d3d3d] px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Contact Us
                        </button>
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    );
}

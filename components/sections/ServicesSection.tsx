'use client';

import React from 'react';
import { PawPrint, Clock, Home as HomeIcon } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

export default function ServicesSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-20 px-6 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Services & Pricing</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Dog Walking */}
                    <AnimatedWrapper delay={0.1} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="bg-[#9ca89e]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <PawPrint className="w-8 h-8 text-[#9ca89e]" />
                        </div>
                        <h3 className="text-2xl mb-4 text-center text-[#3d3d3d]">Dog Walking</h3>
                        <div className="text-center mb-6">
                            <p className="text-4xl text-[#8b6f47] mb-2">$15</p>
                            <p className="text-sm text-[#717182]">per walk</p>
                        </div>
                        <p className="text-[#3d3d3d] mb-6 text-center leading-relaxed">
                            Safe, enjoyable walks tailored to your dog&apos;s energy level. Up to 4 walks per day available.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
                        >
                            Book This Service
                        </button>
                    </AnimatedWrapper>

                    {/* Drop-In Visits */}
                    <AnimatedWrapper delay={0.2} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="bg-[#d4a5a5]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <Clock className="w-8 h-8 text-[#d4a5a5]" />
                        </div>
                        <h3 className="text-2xl mb-4 text-center text-[#3d3d3d]">Drop-In Visits</h3>
                        <div className="text-center mb-6">
                            <p className="text-4xl text-[#8b6f47] mb-2">$14</p>
                            <p className="text-sm text-[#717182]">per visit</p>
                        </div>
                        <p className="text-[#3d3d3d] mb-6 text-center leading-relaxed">
                            Quick check-ins for feeding, playtime, and potty breaks when you&apos;re away.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
                        >
                            Book This Service
                        </button>
                    </AnimatedWrapper>

                    {/* House Sitting */}
                    <AnimatedWrapper delay={0.3} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="bg-[#8b6f47]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <HomeIcon className="w-8 h-8 text-[#8b6f47]" />
                        </div>
                        <h3 className="text-2xl mb-4 text-center text-[#3d3d3d]">House Sitting</h3>
                        <div className="text-center mb-6">
                            <p className="text-4xl text-[#8b6f47] mb-2">$95</p>
                            <p className="text-sm text-[#717182]">per night</p>
                        </div>
                        <p className="text-[#3d3d3d] mb-6 text-center leading-relaxed">
                            Overnight care in your home. Your dog stays comfortable and we&apos;re there all night.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
                        >
                            Book This Service
                        </button>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
}

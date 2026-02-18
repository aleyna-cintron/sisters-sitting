import React from 'react';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import Image from 'next/image';

export default function MeetTheSisters() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Meet the Sisters</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Oneida */}
                    <AnimatedWrapper type="slide-in-left" className="text-center">
                        <div className="relative mb-6 overflow-hidden rounded-3xl shadow-xl">
                            <div className="w-full h-[500px] relative">
                                <Image
                                    src="/oneida.JPG"
                                    alt="Oneida with her Irish Setter"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl mb-2 text-[#3d3d3d]">Oneida, 27</h3>
                        <p className="text-[#9ca89e] mb-4">Owner of a beautiful Irish Setter</p>
                        <p className="text-[#3d3d3d] leading-relaxed max-w-md mx-auto">
                            Calm, attentive, and experienced. Oneida loves long walks and structured routines.
                            She understands that every dog has unique needs and brings patience and care to every visit.
                        </p>
                    </AnimatedWrapper>

                    {/* Janay */}
                    <AnimatedWrapper type="slide-in-right" className="text-center">
                        <div className="relative mb-6 overflow-hidden rounded-3xl shadow-xl">
                            <div className="w-full h-[500px] relative">
                                <Image
                                    src="/janay.JPG"
                                    alt="Janay with her Havanese"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl mb-2 text-[#3d3d3d]">Janay, 21</h3>
                        <p className="text-[#9ca89e] mb-4">Owner of an adorable Havanese</p>
                        <p className="text-[#3d3d3d] leading-relaxed max-w-md mx-auto">
                            Playful, energetic, and nurturing. Janay loves bonding and interactive playtime.
                            She brings joy and enthusiasm to every interaction, making sure your pup feels loved and happy.
                        </p>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
}

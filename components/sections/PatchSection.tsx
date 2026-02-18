'use client';

import React from 'react';
import { Heart, Sparkles, Camera } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import TiktokEmbed from '../ui/TiktokEmbed';
import Image from 'next/image';

export default function PatchSection() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#faf8f5] via-[#f5f0eb] to-[#faf8f5] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 opacity-5">
                <Heart className="w-64 h-64 text-[#d4a5a5]" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-5">
                <Sparkles className="w-48 h-48 text-[#8b6f47]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedWrapper className="text-center mb-16">
                    <Sparkles className="w-10 h-10 text-[#d4a5a5] mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Every Dog Leaves a Mark</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                {/* Two-Column Layout: Video + Text */}
                <AnimatedWrapper type="slide-up" className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-dashed border-[#d4a5a5]/30 mb-16">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Video Side */}
                        <div className="relative bg-[#9ca89e]/5 flex items-center justify-center p-8 lg:p-12">
                            <TiktokEmbed />
                        </div>

                        {/* Text Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="max-w-xl">
                                <AnimatedWrapper type="slide-in-right" delay={0.2}>
                                    <Heart className="w-12 h-12 text-[#d4a5a5] mb-6" />
                                    <h3 className="text-2xl md:text-3xl mb-6 text-[#3d3d3d] leading-relaxed">
                                        A handmade memory for every pup we care for
                                    </h3>
                                    <p className="text-[#3d3d3d] leading-loose mb-6">
                                        Oneida hand-embroiders a custom patch inspired by each dog she meets.
                                        Every stitch carries the personality, quirks, and love of your furry friend.
                                    </p>
                                    <p className="text-[#3d3d3d] leading-loose mb-8">
                                        It&apos;s not just dog sitting—it&apos;s creating lasting memories, one patch at a time.
                                        Because every dog truly leaves a mark on our hearts.
                                    </p>
                                    <button
                                        onClick={scrollToContact}
                                        className="inline-flex items-center gap-2 bg-[#8b6f47] hover:bg-[#6f5838] text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <Heart className="w-5 h-5" />
                                        <span>Ask About Your Custom Patch</span>
                                    </button>
                                </AnimatedWrapper>
                            </div>
                        </div>
                    </div>
                </AnimatedWrapper>

                {/* Our Patch Collection */}
                <AnimatedWrapper className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl mb-4 text-[#3d3d3d]">Our Patch Collection</h3>
                    <p className="text-[#717182] max-w-2xl mx-auto mb-2">
                        A visual story of the beautiful dogs we&apos;ve cared for
                    </p>
                    <div className="w-16 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                {/* Patch Collection Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        {
                            img: '/dog1.JPG',
                            label: 'Custom Patch 1'
                        },
                        {
                            img: '/dog2.JPG',
                            label: 'Custom Patch 2'
                        }
                    ].map((item, idx) => (
                        <AnimatedWrapper
                            type="scale"
                            key={idx}
                            delay={idx * 0.05}
                            className="relative group w-full md:w-64"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-dashed border-[#d4a5a5]/40 h-64">
                                <img
                                    src={item.img} // Kept as img for now but should be Next Image. Since local, easy.
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#8b6f47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <span className="text-white px-3 py-1 bg-[#8b6f47] rounded-full text-sm shadow-lg">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        </AnimatedWrapper>
                    ))}
                </div>

                {/* Bottom decorative text */}
                <AnimatedWrapper delay={0.4} className="text-center mt-12">
                    <p className="text-[#9ca89e] italic max-w-2xl mx-auto">
                        &quot;Each patch tells a story. Each thread holds a memory. Every dog we meet becomes part of our family.&quot;
                    </p>
                    <p className="text-[#8b6f47] mt-4">— Oneida</p>
                </AnimatedWrapper>
            </div>
        </section>
    );
}

import React from 'react';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import Image from 'next/image';

export default function GallerySection() {
    const images = [
        { src: '/customer-pup.JPG', alt: 'Happy Customer Pup' },
        { src: '/IMG_2898.JPG', alt: 'Happy Dog 2' },
        { src: '/IMG_2899.JPG', alt: 'Happy Dog 3' },
        { src: '/IMG_2901.JPG', alt: 'Happy Dog 4' },
        { src: '/IMG_2902.JPG', alt: 'Happy Dog 5' },
        { src: '/IMG_2904.JPG', alt: 'Happy Dog 6' },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Happy Dogs We Love</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {images.map((img, idx) => (
                        <AnimatedWrapper
                            key={idx}
                            type="scale"
                            delay={idx * 0.1}
                            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-80"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </AnimatedWrapper>
                    ))}
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedWrapper className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-black">
                        <video
                            src="/dog-walking.mov"
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            muted
                        />
                        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                            Dog Walking
                        </div>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={0.1} className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-black">
                        <video
                            src="/dog-sitting.mov"
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            muted
                        />
                        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                            Outdoor Time
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </section>
    );
}

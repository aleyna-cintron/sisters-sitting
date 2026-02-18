import React from 'react';
import { PawPrint, Heart, Camera, Home as HomeIcon, Calendar, CheckCircle } from 'lucide-react';
import AnimatedWrapper from '../ui/AnimatedWrapper';

export default function WhyChooseUsSection() {
    const items = [
        { icon: PawPrint, title: 'Experienced Dog Owners', desc: 'We own and love our own dogs, so we understand their needs' },
        { icon: Heart, title: 'Personalized Care', desc: 'Every dog is unique, and we treat each one individually' },
        { icon: Camera, title: 'Photo & Video Updates', desc: 'Stay connected with regular updates and adorable photos' },
        { icon: HomeIcon, title: 'Safe & Comfortable Environment', desc: 'Your dog feels at home with us' },
        { icon: Calendar, title: 'Flexible Scheduling', desc: 'We work around your schedule to meet your needs' },
        { icon: CheckCircle, title: 'Trusted & Reliable', desc: 'Family-run business you can count on' }
    ];

    return (
        <section className="py-20 px-6 bg-[#faf8f5]">
            <div className="max-w-7xl mx-auto">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Why Choose Us</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
                </AnimatedWrapper>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {items.map((item, idx) => (
                        <AnimatedWrapper
                            key={idx}
                            delay={idx * 0.1}
                            type="slide-up"
                            className="text-center"
                        >
                            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
                                <item.icon className="w-10 h-10 text-[#8b6f47]" />
                            </div>
                            <h3 className="text-xl mb-3 text-[#3d3d3d]">{item.title}</h3>
                            <p className="text-[#717182] leading-relaxed">{item.desc}</p>
                        </AnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

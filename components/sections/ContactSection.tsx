import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import ContactForm from '../ui/ContactForm';
import AnimatedWrapper from '../ui/AnimatedWrapper';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <AnimatedWrapper className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Get in Touch</h2>
                    <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full mb-6" />
                    <p className="text-lg text-[#3d3d3d]">We can&apos;t wait to meet your furry best friend!</p>
                </AnimatedWrapper>

                <AnimatedWrapper type="slide-up" className="bg-[#faf8f5] rounded-3xl p-8 md:p-12 shadow-lg">
                    <ContactForm />

                    <div className="mt-10 pt-10 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-center gap-6 text-[#3d3d3d]">
                            <div className="flex items-center justify-center gap-2">
                                <Mail className="w-5 h-5 text-[#8b6f47]" />
                                <span>hello@twotailscare.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5 text-[#8b6f47]" />
                                <span>(555) 123-4567</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Instagram className="w-5 h-5 text-[#8b6f47]" />
                                <span>@twotailscare</span>
                            </div>
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>
        </section>
    );
}

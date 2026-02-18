'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Thank you for reaching out! We will get back to you soon. 🐾' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch {
            setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block mb-2 text-[#3d3d3d]">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]/20 transition-all"
                />
            </div>

            <div>
                <label htmlFor="email" className="block mb-2 text-[#3d3d3d]">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]/20 transition-all"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block mb-2 text-[#3d3d3d]">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]/20 transition-all"
                />
            </div>

            <div>
                <label htmlFor="service" className="block mb-2 text-[#3d3d3d]">Service Needed</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]/20 transition-all"
                >
                    <option value="">Select a service...</option>
                    <option value="walking">Dog Walking</option>
                    <option value="dropin">Drop-In Visits</option>
                    <option value="sitting">House Sitting</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block mb-2 text-[#3d3d3d]">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#8b6f47] focus:outline-none focus:ring-2 focus:ring-[#8b6f47]/20 transition-all resize-none"
                ></textarea>
            </div>

            {submitStatus && (
                <div className={`p-4 rounded-xl mb-4 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8b6f47] disabled:bg-[#8b6f47]/70 hover:bg-[#6f5838] text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex justify-center items-center"
            >
                {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                    'Send Message'
                )}
            </button>
        </form>
    );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Camera,
  Home as HomeIcon,
  Calendar,
  PawPrint,
  Mail,
  Phone,
  Instagram,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import Script from 'next/script';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isTiktokPlaying, setIsTiktokPlaying] = useState(false);

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
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8b6f47] hover:bg-[#6f5838] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book a Service
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/90 hover:bg-white text-[#3d3d3d] px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Sisters Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Meet the Sisters</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Oneida */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/oneida.JPG"
                  alt="Oneida with her Irish Setter"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl mb-2 text-[#3d3d3d]">Oneida, 27</h3>
              <p className="text-[#9ca89e] mb-4">Owner of a beautiful Irish Setter</p>
              <p className="text-[#3d3d3d] leading-relaxed max-w-md mx-auto">
                Calm, attentive, and experienced. Oneida loves long walks and structured routines.
                She understands that every dog has unique needs and brings patience and care to every visit.
              </p>
            </motion.div>

            {/* Janay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/janay.JPG"
                  alt="Janay with her Havanese"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl md:text-3xl mb-2 text-[#3d3d3d]">Janay, 21</h3>
              <p className="text-[#9ca89e] mb-4">Owner of an adorable Havanese</p>
              <p className="text-[#3d3d3d] leading-relaxed max-w-md mx-auto">
                Playful, energetic, and nurturing. Janay loves bonding and interactive playtime.
                She brings joy and enthusiasm to every interaction, making sure your pup feels loved and happy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Every Dog Leaves a Mark Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#faf8f5] via-[#f5f0eb] to-[#faf8f5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-5">
          <Heart className="w-64 h-64 text-[#d4a5a5]" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5">
          <Sparkles className="w-48 h-48 text-[#8b6f47]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Sparkles className="w-10 h-10 text-[#d4a5a5] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Every Dog Leaves a Mark</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

          {/* Two-Column Layout: Video + Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-dashed border-[#d4a5a5]/30 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Side */}
              <div className="relative bg-[#9ca89e]/5 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-[#8b6f47]/20 flex justify-center bg-white min-h-[580px] relative">
                  {!isTiktokPlaying ? (
                    <div className="absolute inset-0 z-10 bg-gray-100 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsTiktokPlaying(true)}>
                      <div className="w-full h-full absolute inset-0">
                        {/* Placeholder image using oneida.JPG as a fallback for now, or a nice gradient/pattern */}
                        <img src="/oneida.JPG" alt="Video Thumbnail" className="w-full h-full object-cover opacity-50 blur-sm" />
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                      <div className="relative z-20 bg-white/90 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#8b6f47] border-b-[15px] border-b-transparent ml-2" />
                      </div>
                      <p className="relative z-20 mt-4 text-white font-semibold text-lg drop-shadow-md">Watch Video</p>
                    </div>
                  ) : (
                    <>
                      <blockquote
                        className="tiktok-embed"
                        cite="https://www.tiktok.com/@baileythesetter/video/7604931303288343838"
                        data-video-id="7604931303288343838"
                        data-embed-from="oembed"
                        style={{ maxWidth: '605px', minWidth: '325px', margin: 0 }}
                      >
                        <section>
                          <a target="_blank" title="@baileythesetter" href="https://www.tiktok.com/@baileythesetter?refer=embed">@baileythesetter</a>
                          <p>A little thank you gift for the pups I dog sit 🐾 I also got them some treats and toys as well 😆 <a title="dogsoftiktok" target="_blank" href="https://www.tiktok.com/tag/dogsoftiktok?refer=embed">#dogsoftiktok</a> <a title="doglover" target="_blank" href="https://www.tiktok.com/tag/doglover?refer=embed">#doglover</a> <a title="embroiderymachine" target="_blank" href="https://www.tiktok.com/tag/embroiderymachine?refer=embed">#embroiderymachine</a> <a title="spanielsoftiktok" target="_blank" href="https://www.tiktok.com/tag/spanielsoftiktok?refer=embed">#spanielsoftiktok</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> </p>
                          <a target="_blank" title="♬ original sound - BaileyTheSetter" href="https://www.tiktok.com/music/original-sound-7604931343717206815?refer=embed">♬ original sound - BaileyTheSetter</a>
                        </section>
                      </blockquote>
                      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
                    </>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-xl">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
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
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 bg-[#8b6f47] hover:bg-[#6f5838] text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Ask About Your Custom Patch</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Patch Collection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl mb-4 text-[#3d3d3d]">Our Patch Collection</h3>
            <p className="text-[#717182] max-w-2xl mx-auto mb-2">
              A visual story of the beautiful dogs we&apos;ve cared for
            </p>
            <div className="w-16 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

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
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative group w-full md:w-64"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-dashed border-[#d4a5a5]/40">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b6f47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white px-3 py-1 bg-[#8b6f47] rounded-full text-sm shadow-lg">
                      {item.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-[#9ca89e] italic max-w-2xl mx-auto">
              &quot;Each patch tells a story. Each thread holds a memory. Every dog we meet becomes part of our family.&quot;
            </p>
            <p className="text-[#8b6f47] mt-4">— Oneida</p>
          </motion.div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Services & Pricing</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dog Walking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
              >
                Book This Service
              </button>
            </motion.div>

            {/* Drop-In Visits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
              >
                Book This Service
              </button>
            </motion.div>

            {/* House Sitting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#8b6f47] hover:bg-[#6f5838] text-white py-3 rounded-xl transition-all duration-300"
              >
                Book This Service
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Dogs Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Happy Dogs We Love</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { src: '/customer-pup.JPG', alt: 'Happy Customer Pup' },
              { src: '/IMG_2898.JPG', alt: 'Happy Dog 2' },
              { src: '/IMG_2899.JPG', alt: 'Happy Dog 3' },
              { src: '/IMG_2901.JPG', alt: 'Happy Dog 4' },
              { src: '/IMG_2902.JPG', alt: 'Happy Dog 5' },
              { src: '/IMG_2904.JPG', alt: 'Happy Dog 6' },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-80"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-black"
            >
              <video
                src="/dog-walking.mov"
                className="w-full h-full object-cover"
                controls
                playsInline
                poster="/customer-pup.JPG"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                Dog Walking
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-black"
            >
              <video
                src="/dog-sitting.mov"
                className="w-full h-full object-cover"
                controls
                playsInline
                poster="/dog1.JPG"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                Outdoor Time
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Why Choose Us</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: PawPrint, title: 'Experienced Dog Owners', desc: 'We own and love our own dogs, so we understand their needs' },
              { icon: Heart, title: 'Personalized Care', desc: 'Every dog is unique, and we treat each one individually' },
              { icon: Camera, title: 'Photo & Video Updates', desc: 'Stay connected with regular updates and adorable photos' },
              { icon: HomeIcon, title: 'Safe & Comfortable Environment', desc: 'Your dog feels at home with us' },
              { icon: Calendar, title: 'Flexible Scheduling', desc: 'We work around your schedule to meet your needs' },
              { icon: CheckCircle, title: 'Trusted & Reliable', desc: 'Family-run business you can count on' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md">
                  <item.icon className="w-10 h-10 text-[#8b6f47]" />
                </div>
                <h3 className="text-xl mb-3 text-[#3d3d3d]">{item.title}</h3>
                <p className="text-[#717182] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#3d3d3d]">Get in Touch</h2>
            <div className="w-24 h-1 bg-[#d4a5a5] mx-auto rounded-full mb-6" />
            <p className="text-lg text-[#3d3d3d]">We can&apos;t wait to meet your furry best friend!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf8f5] rounded-3xl p-8 md:p-12 shadow-lg"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d3d3d] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <PawPrint className="w-8 h-8 text-[#d4a5a5]" />
                <h3 className="text-xl">Two Tails Dog Care</h3>
              </div>
              <p className="text-gray-300">
                Oneida & Janay<br />
                Loving dog care by sisters
              </p>
            </div>

            <div className="text-center">
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Dog Walking</li>
                <li>Drop-In Visits</li>
                <li>House Sitting</li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="mb-4">Contact</h4>
              <p className="text-gray-300">
                hello@twotailscare.com<br />
                (555) 123-4567<br />
                @twotailscare
              </p>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Two Tails Dog Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

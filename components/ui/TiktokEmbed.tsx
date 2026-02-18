'use client';

import React, { useState } from 'react';
import Script from 'next/script';

export default function TiktokEmbed() {
    const [isTiktokPlaying, setIsTiktokPlaying] = useState(false);

    return (
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-[#8b6f47]/20 flex justify-center bg-white min-h-[580px] relative">
            {!isTiktokPlaying ? (
                <div
                    className="absolute inset-0 z-10 bg-gray-100 flex flex-col items-center justify-center cursor-pointer group"
                    onClick={() => setIsTiktokPlaying(true)}
                >
                    <div className="w-full h-full absolute inset-0">
                        {/* Thumbnail with slight zoom effect on hover */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/oneida.JPG"
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-50 blur-sm transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative z-20 bg-white/90 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
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
    );
}

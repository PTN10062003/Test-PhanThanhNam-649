"use client";

import { useEffect, useRef, useState } from "react";
import type { Video } from "@/data/videos";

type VideoCardProps = {
    video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(video.likesCount);

    function toggleLike() {
        setIsLiked((current) => !current);
        setLikesCount((current) => current + (isLiked ? -1 : 1));
    }

    useEffect(() => {
        const player = videoRef.current;
        if (!player) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    void player.play().catch(() => {
                        setIsPlaying(false);
                    });
                } else {
                    player.pause();
                }
            },
            {
                threshold: [0, 0.75],
            },
        );

        observer.observe(player);

        return () => {
            observer.disconnect();
        };
    }, []);

    function togglePlayback() {
        const player = videoRef.current;
        if (!player) return;

        if (player.paused) {
            void player.play();
        } else {
            player.pause();
        }
    }

    return (
        <article className="relative h-dvh w-full overflow-hidden bg-black md:aspect-[9/16] md:h-[min(100dvh,900px)] md:w-auto">
            <video
                ref={videoRef}
                src={video.videoUrl}
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                onClick={togglePlayback}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {!isPlaying && (
                <button
                    type="button"
                    onClick={togglePlayback}
                    className="absolute inset-0 z-10 text-6xl text-white"
                    aria-label="Phát video"
                >
                    ▶
                </button>
            )}
            <div className="absolute bottom-24 right-4 z-20 flex flex-col items-center gap-5 text-white">
                <div className="flex flex-col items-center">
                    <button
                        type="button"
                        onClick={toggleLike}
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-3xl ${isLiked ? "text-red-500" : "text-white"
                            }`}
                        aria-label={isLiked ? "Bỏ thích" : "Thích video"}
                    >
                        {isLiked ? "♥" : "♡"}
                    </button>

                    <span className="mt-1 text-xs font-semibold">{likesCount}</span>
                </div>

                <button
                    type="button"
                    className="flex flex-col items-center"
                    aria-label="Bình luận"
                >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-2xl">
                        ◯
                    </span>
                    <span className="mt-1 text-xs font-semibold">Bình luận</span>
                </button>

                <button
                    type="button"
                    className="flex flex-col items-center"
                    aria-label="Chia sẻ"
                >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-2xl">
                        ↗
                    </span>
                    <span className="mt-1 text-xs font-semibold">Chia sẻ</span>
                </button>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-24 pt-24 text-white md:pb-6">
                <h2 className="font-bold">@{video.authorName}</h2>
                <p className="mt-2 text-sm">{video.description}</p>
            </div>
        </article>
    );
}
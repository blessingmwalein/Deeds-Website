"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubePlayerProps {
  videoId: string
  title?: string
  badge?: string
  caption?: string
  className?: string
}

export function YouTubePlayer({
  videoId,
  title = "YouTube video",
  badge,
  caption,
  className = "",
}: YouTubePlayerProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] border border-[#1B3B2B]/10 bg-[#001D11] shadow-2xl ${className}`}>
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${title} preview`}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#001D11]/70 via-[#001D11]/20 to-transparent" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#E5B80B] shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 translate-x-0.5 text-[#001D11]" fill="currentColor" />
            </span>
            {(badge || caption) && (
              <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                {badge && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B80B]">
                    {badge}
                  </span>
                )}
                {caption && (
                  <span className="text-xs font-medium text-white/70">{caption}</span>
                )}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

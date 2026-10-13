"use client";

import { useEffect, useRef } from "react";
import { VideoLightbox } from "./video-lightbox";

export function CrmPreview({
  label,
  openLabel,
  closeLabel,
}: {
  label: string;
  openLabel: string;
  closeLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }
      void video.play();
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <figure className="flow-video">
      <VideoLightbox
        src="/brand/immocrm-showcase.mp4"
        label={`${openLabel}: ${label}`}
        closeLabel={closeLabel}
      >
        <video
          ref={videoRef}
          src="/brand/immocrm-showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={label}
        />
      </VideoLightbox>
    </figure>
  );
}

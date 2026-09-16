"use client";

import { useEffect, useRef } from "react";

export function CrmPreview({ label }: { label: string }) {
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
    </figure>
  );
}

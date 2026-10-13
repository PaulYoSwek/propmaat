"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps an inline (muted, looping) video in a button. Clicking it opens the
 * same clip large in a dialog with native controls, so the viewer can watch
 * it at full size and unmute it. Escape or a click outside closes it.
 */
export function VideoLightbox({
  src,
  poster,
  label,
  closeLabel,
  children,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  closeLabel: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className={`group relative block w-full cursor-zoom-in text-left outline-offset-4 ${className}`}
      >
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/80 text-on-ink shadow-lg backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        aria-label={label}
        className="video-lightbox m-auto w-[min(96vw,calc((100vh-6rem)*16/9))] max-w-none rounded-2xl border border-line bg-surface p-2 shadow-2xl backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {open ? (
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              playsInline
              loop
              preload="metadata"
              aria-label={label}
              className="block aspect-video w-full rounded-xl bg-ink"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              className="absolute -top-3 -right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-md hover:bg-accent-soft"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

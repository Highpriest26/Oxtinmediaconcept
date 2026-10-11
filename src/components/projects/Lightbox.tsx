"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { ImageAsset } from "@/content/types";
import { Icon } from "../ui/Icon";

/**
 * Accessible lightbox built on the native <dialog> element:
 * - modal focus containment + inert background (native showModal)
 * - Escape closes (native cancel event), arrow keys navigate
 * - background scroll locked while open; focus returns to the trigger on close
 */
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: ImageAsset[];
  index: number | null;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const open = index !== null;
  const count = images.length;

  const go = useCallback(
    (delta: number) => {
      if (index === null || count < 2) return;
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      document.documentElement.style.overflow = "";
      triggerRef.current?.focus();
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  // Touch swipe support.
  const touchX = useRef<number | null>(null);
  const current = index !== null ? images[index] : null;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Image viewer"
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white backdrop:bg-black/90"
    >
      {current ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <p className="text-sm text-white/70" aria-live="polite">
              {index! + 1} / {count}
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="grid size-12 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close image viewer"
              autoFocus
            >
              <Icon name="close" className="size-6" />
            </button>
          </div>

          <div
            className="relative flex-1"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) dialogRef.current?.close();
            }}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="pointer-events-none object-contain px-2 sm:px-20"
            />
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-black/50 hover:bg-black/70 sm:left-4"
                  aria-label="Previous image"
                >
                  <Icon name="chevron-left" className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-black/50 hover:bg-black/70 sm:right-4"
                  aria-label="Next image"
                >
                  <Icon name="chevron-right" className="size-6" />
                </button>
              </>
            ) : null}
          </div>

          <p className="px-4 py-4 text-center text-sm text-white/80 sm:px-6">{current.caption ?? current.alt}</p>
        </div>
      ) : null}
    </dialog>
  );
}

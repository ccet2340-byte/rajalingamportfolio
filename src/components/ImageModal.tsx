import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  src: string | null;
  caption?: string;
  onClose: () => void;
};

export function ImageModal({ src, caption, onClose }: Props) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-foreground shadow-lg hover:bg-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] max-w-[92vw] overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={src}
              alt={caption ?? "Preview"}
              className="block max-h-[80vh] w-auto max-w-[92vw] object-contain"
            />
            {caption && (
              <div className="px-4 py-3 text-center text-sm text-muted-foreground border-t">
                {caption}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

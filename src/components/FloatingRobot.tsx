import { motion } from "framer-motion";
import robotImg from "@/assets/robot.png";
import { useState } from "react";

export function FloatingRobot() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 180, damping: 18 }}
    >
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass max-w-[220px] rounded-2xl px-4 py-3 text-xs text-foreground shadow-lg"
        >
          Hi! I'm <strong>Raj-Bot</strong>. Explore the portfolio and feel free to reach out 👋
        </motion.div>
      )}
      <button
        aria-label="Toggle assistant"
        onClick={() => setOpen((s) => !s)}
        className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white neon-ring overflow-hidden float"
      >
        <img
          src={robotImg}
          alt="Assistant robot"
          className="h-full w-full object-contain"
          width={128}
          height={128}
        />
      </button>
    </motion.div>
  );
}

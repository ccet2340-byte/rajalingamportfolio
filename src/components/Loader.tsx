import { motion } from "framer-motion";
import robotImg from "@/assets/robot.png";

type Props = { onEnter: () => void };

export function Loader({ onEnter }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center grid-bg bg-background px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,theme(colors.blue.300/40),transparent_70%)] blur-2xl" />
        <motion.img
          src={robotImg}
          alt="AI assistant robot waving"
          className="h-40 w-40 sm:h-48 sm:w-48 object-contain float"
          width={512}
          height={512}
          animate={{ rotate: [0, -3, 3, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2.6 }}
        />
      </motion.div>

      <motion.h1
        className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to <span className="neon-text">Rajalingam Portfolio</span>{" "}
        <span className="wave">👋</span>
      </motion.h1>
      <motion.p
        className="mt-2 max-w-md text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AI &amp; Data Science Student · UI/UX Designer
      </motion.p>

      <motion.button
        onClick={onEnter}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground neon-ring transition hover:scale-[1.03]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Enter Portfolio
        <span aria-hidden>→</span>
      </motion.button>
    </motion.div>
  );
}

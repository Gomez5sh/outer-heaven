"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../layouts/ThemeProvider";
import { Button } from "../ui/button";

type Theme = "dark" | "light";

interface Props {
  resolvedTheme: Theme;
}

export function ThemeToggle({ resolvedTheme }: Props) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <motion.div
        key={theme}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="inline-block  dark:bg-[#F0E7DB] dark:text-[#202023] bg-[#202023] text-[#F0E7DB] dark:hover:bg-[#E1D8CC] hover:bg-[#2D2D30] rounded-full "
      >
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 transition-colors duration-200 dark:bg-[#F0E7DB] dark:text-[#202023] bg-[#202023] text-[#F0E7DB] dark:hover:bg-[#E1D8CC] hover:bg-[#2D2D30] group"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
          ) : (
            <Moon className="h-5 w-5 transition-transform duration-200 group-hover:-rotate-12" />
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

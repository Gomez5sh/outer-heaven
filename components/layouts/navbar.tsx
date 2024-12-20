"use client";

import { useState, useEffect } from "react";
import Logo from "../utils/Logo";
import NextLink from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "../utils/ToggleTheme";

const linksItems = () => {
  return [
    {
      name: "Works",
      href: "/works",
    },
    {
      name: "Posts",
      href: "/posts",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Skills",
      href: "/skills",
    },
  ];
};

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b ">
        <div className="mx-auto max-w-4xl flex h-14 items-center px-4">
          <Logo />
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="sticky top-0 z-50 w-full 
      bg-background  
      text-foreground 
      dark:bg-[#202023] 
      dark:text-[#F0E7DB] 
      bg-[#F0E7DB] 
      text-[#1E1E1E]
      
      "
    >
      <div className="mx-auto max-w-4xl flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6 text-sm">
          {linksItems().map((link) => (
            <NextLink
              key={link.name}
              href={link.href}
              className="transition-colors dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
            </NextLink>
          ))}
          <ThemeToggleButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {linksItems().map((link) => (
            <NextLink
              key={link.name}
              href={link.href}
              className="block py-2 px-4 text-sm dark:text-zinc-400 text-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NextLink>
          ))}
        </div>
      )}
    </nav>
  );
}

function ThemeToggleButton() {
  const { resolvedTheme } = useTheme();

  return <ThemeToggle resolvedTheme={resolvedTheme} />;
}

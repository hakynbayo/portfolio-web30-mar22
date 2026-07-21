"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.a
                        href="#home"
                        className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.02 }}
                    >
                        Akinbayo<span className="text-primary">.</span>
                    </motion.a>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a
                                href="https://docs.google.com/document/d/1kYUkLxKlRTardu8M8RRiWxrqMOGMnw9nAmimGB3ssHk/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="sm" className="ml-4">
                                    Resume
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>

                {/* Mobile navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col gap-1 pt-2 pb-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * i }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-2"
                                >
                                    <a
                                        href="https://docs.google.com/document/d/1kYUkLxKlRTardu8M8RRiWxrqMOGMnw9nAmimGB3ssHk/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button size="sm" className="w-full">
                                            Resume
                                        </Button>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}

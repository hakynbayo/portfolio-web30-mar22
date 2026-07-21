"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p
                        variants={item}
                        className="text-primary font-medium mb-4 text-sm tracking-wide uppercase"
                    >
                        Frontend Engineer • Software Developer
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                            Akinbayo
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        I craft modern, responsive, and accessible web experiences with
                        React, Next.js, and TypeScript — from conception to launch.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects">
                            <Button size="lg" className="gap-2">
                                View My Work
                                <ArrowDown size={16} />
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" size="lg">
                                Get In Touch
                            </Button>
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-4 mt-12"
                    >
                        {[
                            {
                                href: "https://github.com/hakynbayo?tab=repositories",
                                icon: <Github size={20} />,
                                label: "GitHub",
                            },
                            {
                                href: "https://www.linkedin.com/in/akinwande-akinbayo",
                                icon: <Linkedin size={20} />,
                                label: "LinkedIn",
                            },
                            {
                                href: "https://x.com/mistayagi",
                                icon: <Twitter size={20} />,
                                label: "Twitter",
                            },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all border border-transparent hover:border-border"
                                aria-label={social.label}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

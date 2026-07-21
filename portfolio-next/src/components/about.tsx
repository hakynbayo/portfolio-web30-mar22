"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { Code2, Palette, Zap, Smartphone } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function About() {
    return (
        <section id="about" className="py-24 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* About text */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        <motion.p
                            variants={fadeInUp}
                            className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                        >
                            I&apos;m a proficient Frontend Engineer committed to developing
                            responsive and accessible products, from conception to launch. An
                            adept problem solver and highly adaptable engineer, able to
                            discover, create, and implement unique solutions.
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                        >
                            I specialize in designing and delivering scalable software projects
                            in agile environments using React, Next.js, TypeScript, and modern
                            tooling. I strive to contribute positively as an active team player
                            while growing professionally.
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                        >
                            {[
                                {
                                    icon: Code2,
                                    title: "Clean Code",
                                    desc: "Semantic & maintainable",
                                },
                                {
                                    icon: Palette,
                                    title: "UI/UX Design",
                                    desc: "Figma to code",
                                },
                                {
                                    icon: Zap,
                                    title: "Performance",
                                    desc: "Optimized apps",
                                },
                                {
                                    icon: Smartphone,
                                    title: "Mobile First",
                                    desc: "React Native & responsive",
                                },
                            ].map((highlight) => (
                                <motion.div
                                    key={highlight.title}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border/50"
                                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="p-2 rounded-md bg-primary/10">
                                        <highlight.icon size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">
                                            {highlight.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {highlight.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-xl font-semibold text-foreground"
                        >
                            Technologies I work with
                        </motion.h3>
                        <motion.div className="flex flex-wrap gap-2" variants={stagger}>
                            {skills.map((skill) => (
                                <motion.div key={skill} variants={skillItem}>
                                    <Badge
                                        variant="secondary"
                                        className="px-3 py-1.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

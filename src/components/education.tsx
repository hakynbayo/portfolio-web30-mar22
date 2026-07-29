"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function Education() {
    return (
        <section className="py-24 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Education & Certifications
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Education */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={stagger}
                    >
                        <motion.div variants={item} className="flex items-center gap-2 mb-6">
                            <GraduationCap size={22} className="text-primary" />
                            <h3 className="text-xl font-semibold text-foreground">
                                Education
                            </h3>
                        </motion.div>

                        <div className="space-y-4">
                            {education.map((edu) => (
                                <motion.div
                                    key={edu.institution}
                                    variants={item}
                                    className="p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-medium text-foreground text-sm">
                                            {edu.degree}
                                        </h4>
                                        <span className="text-xs text-primary font-medium">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.institution}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={stagger}
                    >
                        <motion.div variants={item} className="flex items-center gap-2 mb-6">
                            <Award size={22} className="text-primary" />
                            <h3 className="text-xl font-semibold text-foreground">
                                Certifications
                            </h3>
                        </motion.div>

                        <div className="space-y-4">
                            {certifications.map((cert) => (
                                <motion.div
                                    key={cert.name}
                                    variants={item}
                                    className="p-4 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-medium text-foreground text-sm">
                                            {cert.name}
                                        </h4>
                                        <span className="text-xs text-primary font-medium">
                                            {cert.year}
                                        </span>
                                    </div>
                                    {cert.issuer && (
                                        <p className="text-sm text-muted-foreground">
                                            {cert.issuer}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

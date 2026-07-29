"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Experience
                    </h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <motion.div
                            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border"
                            initial={{ scaleY: 0, originY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    className="relative pl-12 md:pl-20"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    }}
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.15 + 0.2,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </motion.div>

                                    <motion.div
                                        className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                                        whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit">
                                                {exp.date}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={14} />
                                                {exp.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

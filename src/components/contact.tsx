"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    GitHub: <Github size={20} />,
    Twitter: <Twitter size={20} />,
    LinkedIn: <Linkedin size={20} />,
    WhatsApp: <MessageCircle size={20} />,
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
                    >
                        Let&apos;s Work Together
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-muted-foreground mb-4">
                        I&apos;m currently open to new opportunities and collaborations.
                        Whether you have a project in mind or just want to say hi, feel free
                        to reach out.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="w-12 h-1 bg-primary mx-auto rounded-full mb-12"
                    />

                    <motion.div variants={fadeInUp}>
                        <a href="mailto:akinbayo256@gmail.com">
                            <Button size="lg" className="gap-2 mb-12">
                                <Mail size={18} />
                                Say Hello
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-3"
                        variants={container}
                    >
                        {socialLinks.map((link) => (
                            <motion.div key={link.name} variants={item}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant="outline"
                                            className="gap-2 hover:border-primary/50 hover:text-primary transition-colors"
                                        >
                                            {iconMap[link.name]}
                                            {link.name}
                                        </Button>
                                    </motion.div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

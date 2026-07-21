import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Akinbayo Akinwande - Frontend Engineer",
    description:
        "Frontend Engineer specializing in React, Next.js, and TypeScript. Building modern, responsive, and accessible web experiences from Lagos, Nigeria.",
    keywords: [
        "Frontend Engineer",
        "React",
        "Next.js",
        "TypeScript",
        "Web Developer",
        "Software Developer",
        "Lagos",
        "Nigeria",
    ],
    openGraph: {
        title: "Akinbayo Akinwande - Frontend Engineer",
        description:
            "Frontend Engineer specializing in React, Next.js, and TypeScript.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

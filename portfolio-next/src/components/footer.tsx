export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Akinbayo Akinwande. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

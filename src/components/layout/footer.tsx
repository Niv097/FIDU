import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/10 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/20 p-1 rounded-md border border-primary/30">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-primary"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                FIDUCIA<span className="text-primary">TECH</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Empowering the next generation of fintech applications with enterprise-grade infrastructure, security, and scalability.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors text-sm">Overview</Link></li>
                            <li><Link href="/platform#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Key Features</Link></li>
                            <li><Link href="/platform#security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</Link></li>
                            <li><Link href="/platform#api" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/company" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/company#careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/company#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security Status</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Fiducia Tech. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

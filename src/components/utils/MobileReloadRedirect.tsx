"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function MobileReloadRedirect() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check if device is mobile (standard mobile breakpoint is 768px)
        const isMobile = window.innerWidth < 768;

        // Check if we are not on the home page
        const isNotHome = pathname !== "/";

        if (isMobile && isNotHome) {
            // Check if the navigation was a reload
            const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const isReload = navigationEntries.length > 0 && navigationEntries[0].type === "reload";

            if (isReload) {
                router.replace("/");
            }
        }
    }, [pathname, router]);

    return null;
}

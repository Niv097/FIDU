"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function MobileReloadRedirect() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Robust check for reload on mobile
        const checkAndRedirect = () => {
            if (typeof window === "undefined") return;

            const isMobileView = window.innerWidth < 1024;
            const isNotHome = window.location.pathname !== "/";

            // Comprehensive reload check
            const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const isReload =
                (navigationEntries.length > 0 && navigationEntries[0].type === "reload") ||
                (window.performance && window.performance.navigation && window.performance.navigation.type === 1);

            if (isMobileView && isNotHome && isReload) {
                // Hard redirect to home
                window.location.replace("/");
            }
        };

        checkAndRedirect();
    }, [pathname]); // Use pathname to ensure logic re-runs on navigation

    return null;
}

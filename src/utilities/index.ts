import { useEffect, useState } from 'react';

export function useIsDarkMode(): boolean {
    const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {

        const updateIsDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Observe class changes on <html>
        const observer = new MutationObserver(updateIsDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // In case theme toggles without class mutation (e.g. manually)
        updateIsDarkMode();

        return () => observer.disconnect();
    }, []);

    return isDarkMode;
}

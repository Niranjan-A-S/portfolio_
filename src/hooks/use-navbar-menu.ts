import { useState, useCallback, useEffect } from 'react';

export const useNavbarMenu = () => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const toggleNavbar = useCallback(() => {
        setIsMobileMenu(prev => !prev);
    }, []);

    const hideNavbar = useCallback(() => {
        setIsMobileMenu(false);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 860) {
                setIsMobileMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMobileMenu, toggleNavbar, hideNavbar };
};

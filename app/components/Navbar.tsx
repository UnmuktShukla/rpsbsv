'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo-1.png';
import { bodoni_moda } from '@/app/ui/fonts';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navlinks = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About Us'},
    {href: '/academics', label: 'Academics'},
    {href: '/admissions', label: 'Admissions'},
    {href: '/campus', label: 'Campus Life'},
    {href: '/contact', label: 'Contact Us'}    
]

export default function Navbar(){

    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    } , [])

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [menuOpen]);

    return (
        <header className={`fixed top-0 left-0 w-full z-80 ${scrolled || menuOpen ? 'bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out' : ''}`}>
            <nav className="flex justify-between items-center px-4 py-3 sm:px-5 sm:py-5">
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <Link
                        href="/"
                        aria-label="RPS Bal Sainik Vidyalaya home"
                        className="shrink-0"
                    >
                        <Image
                            src={logo}
                            alt="School Logo"
                            width={80}
                            height={80}
                            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                        />
                    </Link>
                    <div className={`${bodoni_moda.className} min-w-0`}>
                        <p className="text-base sm:text-2xl lg:text-3xl font-black text-[#5e3536] leading-tight truncate">RPS BAL SAINIK</p>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className='flex-1 border-t border-current text-[#5e3536]'></span>
                            <p className="text-xs sm:text-lg lg:text-xl tracking-[0.2em] sm:tracking-[7px] font-medium text-[#5e3536]">VIDYALAYA</p>
                            <span className='flex-1 border-t border-current text-[#5e3536]'></span>
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-5 mr-5">
                    <ul className="flex items-center gap-5 text-lg">
                        {navlinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-[#5e3536] hover:text-[#8b282b] transition-colors ${isActive ? 'border-b-2 border-[#8b282b] text-[#8b282b] font-bold' : '' }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    className="lg:hidden p-2 text-[#5e3536] shrink-0"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] bottom-0 z-70 bg-[#f9f1e6]/95 backdrop-blur-md transition-opacity duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <ul className="flex flex-col gap-1 px-6 py-6 text-lg bg-red-200">
                    {navlinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block py-3 border-b border-[#5e3536]/15 text-[#5e3536] ${isActive ? 'text-[#8b282b] font-bold' : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    )
}

import React, { useState, useEffect } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    Twitter,
    Sparkles,
    Star,
    ChevronUp
} from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.getElementById('footer-section');
        if (footerElement) {
            observer.observe(footerElement);
        }

        // Scroll to top button visibility
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSocialButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#D5DD48';
        target.style.borderColor = '#D5DD48';
    };

    const handleSocialButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#1f2937';
        target.style.borderColor = '#374151';
    };

    const handleScrollTopMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#A8B536';
    };

    const handleScrollTopMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#D5DD48';
    };

    const openingHours = [
        { day: 'Montag', hours: '09:00 - 18:00' },
        { day: 'Dienstag', hours: '09:00 - 18:00' },
        { day: 'Mittwoch', hours: '09:00 - 18:00' },
        { day: 'Donnerstag', hours: '09:00 - 20:00' },
        { day: 'Freitag', hours: '09:00 - 18:00' },
        { day: 'Samstag', hours: '09:00 - 16:00' },
        { day: 'Sonntag', hours: 'Geschlossen' }
    ];

    const quickLinks = [
        'Über uns',
        'Preisliste',
        'Galerie',
        'Kurse',
        'Kontakt',
        'Termine buchen'
    ];

    const services = [
        'Gel Maniküre',
        'Nail Art',
        'French Manicure',
        'Shellac Behandlung',
        'Nagelverlängerung',
        'Nail Design'
    ];

    return (
        <div className="relative">
            <footer
                id="footer-section"
                className="relative bg-gray-900 text-white"
            >
                {/* Top Border */}
                <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: '#D5DD48' }}
                ></div>

                <div className="container mx-auto px-6 py-16 relative z-10">

                    {/* Main Footer Content */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">

                        {/* Company Info */}
                        <div className={`space-y-6 transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div
                                        className="rounded-lg p-2"
                                        style={{ backgroundColor: '#D5DD48' }}
                                    >
                                        <Sparkles className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <h3
                                        className="text-2xl font-bold"
                                        style={{ color: '#D5DD48' }}
                                    >
                                        blickfang
                                    </h3>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-sm">
                                    Ihr Experte für professionelle Nagelpflege und kreative Nail Art Designs.
                                    Seit über 8 Jahren verwöhnen wir unsere Kunden mit höchster Qualität und Leidenschaft.
                                </p>

                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-gray-400 text-sm">4.9/5 (200+ Bewertungen)</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-medium text-white">Folgen Sie uns</h4>
                                <div className="flex space-x-3">
                                    <button
                                        className="bg-gray-800 p-2.5 rounded-lg hover:scale-105 transform transition-all duration-200 border border-gray-700"
                                        onMouseEnter={handleSocialButtonMouseEnter}
                                        onMouseLeave={handleSocialButtonMouseLeave}
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        className="bg-gray-800 p-2.5 rounded-lg hover:scale-105 transform transition-all duration-200 border border-gray-700"
                                        onMouseEnter={handleSocialButtonMouseEnter}
                                        onMouseLeave={handleSocialButtonMouseLeave}
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        className="bg-gray-800 p-2.5 rounded-lg hover:scale-105 transform transition-all duration-200 border border-gray-700"
                                        onMouseEnter={handleSocialButtonMouseEnter}
                                        onMouseLeave={handleSocialButtonMouseLeave}
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={`space-y-4 transition-all duration-800 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                style={{ backgroundColor: '#D5DD48' }}
                                            ></div>
                                            <span>{link}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className={`space-y-4 transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h4 className="text-lg font-medium text-white mb-4">Unsere Services</h4>
                            <ul className="space-y-2.5">
                                {services.map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                style={{ backgroundColor: '#D5DD48' }}
                                            ></div>
                                            <span>{service}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Hours */}
                        <div className={`space-y-4 transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h4 className="text-lg font-medium text-white mb-4">Kontakt & Öffnungszeiten</h4>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-4 h-4 mt-0.5" style={{ color: '#D5DD48' }} />
                                    <div className="text-sm">
                                        <p className="text-gray-300">Musterstraße 123</p>
                                        <p className="text-gray-300">1010 Wien, Österreich</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-4 h-4" style={{ color: '#D5DD48' }} />
                                    <a
                                        href="tel:+43123456789"
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        +43 (0) 123 456 789
                                    </a>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-4 h-4" style={{ color: '#D5DD48' }} />
                                    <a
                                        href="mailto:info@blickfang-nails.at"
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        info@blickfang-nails.at
                                    </a>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mt-6">
                                <div className="flex items-center space-x-2 mb-3">
                                    <Clock className="w-4 h-4" style={{ color: '#D5DD48' }} />
                                    <span className="font-medium text-white text-sm">Öffnungszeiten</span>
                                </div>
                                <div className="space-y-1 text-xs">
                                    {openingHours.map((schedule) => (
                                        <div key={schedule.day} className="flex justify-between items-center">
                                            <span className="text-gray-300">{schedule.day}</span>
                                            <span className={`${schedule.hours === 'Geschlossen' ? 'text-red-400' : 'text-gray-200'} font-medium`}>
                                                {schedule.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div
                        className="border-t pt-6"
                        style={{ borderColor: 'rgba(213, 221, 72, 0.2)' }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                © 2025 blickfang Nagelstudio. Alle Rechte vorbehalten.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Datenschutz
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Impressum
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    AGB
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 z-50 ${
                    showScrollTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                    backgroundColor: '#D5DD48'
                }}
                onMouseEnter={handleScrollTopMouseEnter}
                onMouseLeave={handleScrollTopMouseLeave}
                aria-label="Nach oben scrollen"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Footer;
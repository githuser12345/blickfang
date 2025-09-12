import React, { useState, useEffect } from 'react';
import { Award, Heart, Clock, MapPin, Sparkles, Star, ChevronDown, Play, Phone, ArrowRight, Users, BookOpen, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const BlickfangAcademy = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => setIsVisible(true), 300);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-rose-50 overflow-hidden">

            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-green-100' : 'bg-white/90 backdrop-blur-sm'
            }`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-rose-400 bg-clip-text text-transparent">
                            blickfang
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium">Home</a>
                            <a href="#courses" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium">Kurse</a>
                            <a href="#about" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium">Über Uns</a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105 font-medium">Kontakt</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        transform: `translateY(${scrollY * 0.1}px)`
                    }}
                ></div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 opacity-8 z-1">
                <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-300 to-rose-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-rose-200 to-green-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-rose-200 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Hero Section - Academy Introduction */}
            <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">

                {/* Main Academy Hero */}
                <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[90vh]">

                    {/* Left Content - Academy Info */}
                    <div className="lg:col-span-7 relative z-20">

                        {/* Academy Badge */}
                        <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-rose-400 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold mb-8 shadow-lg transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Shield className="w-5 h-5 text-white" />
                            <span>Zertifizierte Nageldesign Academy</span>
                        </div>

                        {/* Main Title */}
                        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                                    blickfang
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-green-600 via-rose-400 to-green-500 bg-clip-text text-transparent">
                                    Academy
                                </span>
                            </h1>

                            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
                                Tauche ein in die faszinierende Welt des Nageldesigns und entdecke
                                <span className="text-green-600 font-semibold"> Inspiration, Entspannung und Freude</span> in jedem Pinselstrich.
                            </p>
                        </div>

                        {/* Academy Stats - Equal Height Cards */}
                        <div className={`grid grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-green-200 hover:scale-105 transition-all duration-300 cursor-pointer group hover:bg-white hover:shadow-2xl h-32 flex flex-col justify-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-rose-400 rounded-2xl mb-4 group-hover:scale-110 transition-transform mx-auto">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                                    <div className="text-sm text-gray-600 font-medium">Absolventen</div>
                                </div>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-green-200 hover:scale-105 transition-all duration-300 cursor-pointer group hover:bg-white hover:shadow-2xl h-32 flex flex-col justify-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-400 to-green-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform mx-auto">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                                    <div className="text-sm text-gray-600 font-medium">Online Kurse</div>
                                </div>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-green-200 hover:scale-105 transition-all duration-300 cursor-pointer group hover:bg-white hover:shadow-2xl h-32 flex flex-col justify-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-rose-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform mx-auto">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                                    <div className="text-sm text-gray-600 font-medium">Erfolgsrate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="lg:col-span-5 relative">
                        <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                {/* Professional Nail Art Image */}
                                <div className="w-full h-[600px] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&crop=faces"
                                        alt="Professionelles Nageldesign"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Success Badge - Fixed Position */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-rose-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800">5.0 Bewertung</span>
                                    </div>
                                </div>

                                {/* Academy Info Card - Fixed Position */}
                                <div className="absolute bottom-6 right-6 bg-gradient-to-br from-green-500 to-rose-400 text-white rounded-2xl p-6 shadow-2xl max-w-xs">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Shield className="w-5 h-5" />
                                        <span className="font-bold">Zertifiziert</span>
                                    </div>
                                    <p className="text-sm opacity-90">Anerkannte Ausbildung mit offiziellen Zertifikaten</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <ChevronDown className="w-8 h-8 text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Transition Section with Overlapping */}
            <div className="relative -mt-32 pt-40 pb-20 bg-gradient-to-b from-white/90 via-white/95 to-white">

                {/* Philosophy Section - Overlapping */}
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left - Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium">
                                <Heart className="w-4 h-4" />
                                <span>Unsere Mission</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Ob Beruf oder Hobby –
                                <span className="text-green-600"> entfalte dein Potenzial</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Mit unserer <strong className="text-green-600">innovativen Online-Schulung</strong> wirst du zur
                                    Meisterin eigener Nagelkreationen. Starte heute deine Reise zum Erfolg mit unserer
                                    modernen Ausbildung für Nageldesign!
                                </p>

                                <div className="bg-gradient-to-r from-green-50 to-rose-50 rounded-2xl p-6 border-l-4 border-green-500">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">Flexible Online-Kurse</h3>
                                            <p className="text-gray-700">Lerne in deinem eigenen Tempo, wann und wo du willst</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Overlapping Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-xl">
                                <div className="w-full h-[400px] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=400&fit=crop"
                                        alt="Online Nageldesign Kurs"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Overlapping Feature Card */}
                            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-green-200 max-w-xs">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="bg-gradient-to-br from-green-500 to-rose-400 rounded-lg p-2">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-bold text-gray-900">Flexibel lernen</span>
                                </div>
                                <p className="text-sm text-gray-700">24/7 Zugang zu allen Kursinhalten</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div id="courses" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            <span>Unsere Kurse</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Wähle deinen perfekten
                            <span className="text-green-600"> Lernweg</span>
                        </h2>

                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-rose-400 rounded-full mx-auto"></div>
                    </div>

                    {/* Course Cards - Fixed Layout */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Course 1 - Basic Essentials */}
                        <div className="group relative">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col">

                                {/* Course Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Basic Nageldesign Kurs"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Anfänger
                                    </div>

                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-rose-400 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                                        €149
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                        Basic Essentials
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed flex-1 text-sm">
                                        Perfekt für Einsteiger. Lerne die Grundlagen des Nageldesigns von der Pike auf.
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>12 Video-Lektionen</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>Zertifikat inklusive</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>Lebenslanger Zugang</span>
                                        </li>
                                    </ul>

                                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors duration-300 mt-auto">
                                        Kurs starten
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Course 2 - Advanced Pro */}
                        <div className="group relative">
                            <div className="bg-gradient-to-br from-green-50 to-rose-50 rounded-3xl overflow-hidden shadow-xl border-2 border-green-300 hover:scale-105 transition-all duration-500 cursor-pointer relative h-full flex flex-col">

                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Advanced Nageldesign Kurs"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Fortgeschritten
                                    </div>

                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-green-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                                        €299
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors">
                                        Advanced Pro
                                    </h3>
                                    <p className="text-gray-800 mb-4 leading-relaxed flex-1 text-sm">
                                        Für Profis und ambitionierte Lerner. Erweiterte Techniken und Geschäftsführung.
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center space-x-2 text-sm text-gray-800">
                                            <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                                            <span>24 Video-Lektionen</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-800">
                                            <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                                            <span>Business-Modul</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-800">
                                            <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                                            <span>1-zu-1 Mentoring</span>
                                        </li>
                                    </ul>

                                    <button className="w-full bg-gradient-to-r from-rose-400 to-green-500 hover:from-rose-500 hover:to-green-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 mt-auto">
                                        Jetzt upgraden
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Course 3 - Masterclass */}
                        <div className="group relative">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col">

                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Expert Nageldesign Kurs"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Expert
                                    </div>

                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-rose-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                                        €399
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                        Expert Masterclass
                                    </h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed flex-1 text-sm">
                                        Die ultimative Ausbildung. Von Basics bis hin zur Studioeröffnung.
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            <span>36+ Video-Lektionen</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            <span>Komplettes Starter-Kit</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            <span>Persönliche Betreuung</span>
                                        </li>
                                    </ul>

                                    <button className="w-full bg-gradient-to-r from-green-600 to-rose-500 hover:from-green-700 hover:to-rose-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 mt-auto">
                                        Masterclass starten
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="bg-gradient-to-b from-white to-green-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-xl">
                                <div className="w-full h-[500px] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=500&fit=crop"
                                        alt="Nageldesign Expertin bei der Arbeit"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-500 to-rose-400 text-white rounded-2xl p-8 shadow-2xl max-w-xs">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">8+</div>
                                    <div className="text-sm opacity-90">Jahre Erfahrung</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium">
                                <Sparkles className="w-4 h-4" />
                                <span>Über uns</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Deine Expertin für
                                <span className="text-green-600"> professionelles Nageldesign</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Seit über 8 Jahren begeistere ich Menschen für die Kunst des Nageldesigns.
                                    Mit der Blickfang Academy möchte ich mein Wissen und meine Leidenschaft
                                    an dich weitergeben.
                                </p>

                                <p>
                                    Ob du gerade erst anfängst oder bereits Erfahrung hast – meine Kurse
                                    sind darauf ausgelegt, dich auf deinem individuellen Lernweg zu unterstützen
                                    und zu inspirieren.
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-8">
                                    <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-lg">
                                        <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                                        <div className="text-sm text-gray-700">Zufriedene Schüler</div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-lg">
                                        <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                                        <div className="text-sm text-gray-700">Erfolgsquote</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left - Contact Info */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-full text-white font-medium">
                                <Phone className="w-4 h-4" />
                                <span>Kontakt</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Bereit für deine
                                <span className="text-green-400"> Nageldesign-Reise?</span>
                            </h2>

                            <p className="text-xl text-gray-300 leading-relaxed">
                                Kontaktiere mich für ein kostenloses Beratungsgespräch oder starte
                                direkt mit deinem ersten Kurs.
                            </p>

                            {/* Contact Methods */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl backdrop-blur-sm">
                                    <div className="bg-green-600 rounded-lg p-3">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">Telefon</div>
                                        <div className="text-gray-300">+43 123 456 789</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-2xl backdrop-blur-sm">
                                    <div className="bg-green-600 rounded-lg p-3">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">Standort</div>
                                        <div className="text-gray-300">Voitsberg, Steiermark</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                <button className="bg-gradient-to-r from-green-600 to-rose-400 hover:from-green-700 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl">
                                    Kostenlose Beratung
                                </button>

                                <button className="border border-green-500 text-green-400 hover:bg-green-600 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300">
                                    Direkt buchen
                                </button>
                            </div>
                        </div>

                        {/* Right - Contact Visual */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <div className="w-full h-[500px] relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=600&h=500&fit=crop"
                                        alt="Kontakt für Nageldesign Beratung"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating Success Stories */}
                            <div className="absolute -top-8 -left-8 bg-white text-gray-900 rounded-2xl p-6 shadow-2xl max-w-xs">
                                <div className="flex items-center space-x-2 mb-3">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-rose-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="font-semibold">Maria K.</span>
                                </div>
                                <p className="text-sm">"Fantastische Kurse! Habe so viel gelernt!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Logo & Description */}
                        <div className="space-y-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-rose-400 bg-clip-text text-transparent">
                                blickfang Academy
                            </div>
                            <p className="text-sm text-gray-400">
                                Deine professionelle Online-Nageldesign Akademie für kreatives Lernen
                                und beruflichen Erfolg.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold">Quick Links</h3>
                            <div className="space-y-2">
                                <a href="#courses" className="block hover:text-green-400 transition-colors">Kurse</a>
                                <a href="#about" className="block hover:text-green-400 transition-colors">Über uns</a>
                                <a href="#contact" className="block hover:text-green-400 transition-colors">Kontakt</a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold">Kontakt</h3>
                            <div className="space-y-2 text-sm">
                                <div>Voitsberg, Steiermark</div>
                                <div>+43 123 456 789</div>
                                <div>info@blickfang-academy.at</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                        <p>&copy; 2024 Blickfang Academy. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlickfangAcademy;
import { useState } from 'react';

function Header({ currentPage, setCurrentPage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => setCurrentPage('home')}
                >
                    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,238,255,0.4)] group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-background-dark font-bold">directions_boat</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        STS <span className="text-primary font-light">Guardian</span>
                    </h1>
                </div>

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-10">
                    <NavLink
                        label="이론 학습"
                        active={currentPage === 'theory'}
                        onClick={() => handleNavClick('theory')}
                    />
                    <NavLink
                        label="영상 교육"
                        active={currentPage === 'video'}
                        onClick={() => handleNavClick('video')}
                    />
                    <NavLink
                        label="시뮬레이션"
                        active={currentPage === 'simulation'}
                        onClick={() => handleNavClick('simulation')}
                    />
                    <NavLink
                        label="평가 퀴즈"
                        active={currentPage === 'quiz'}
                        onClick={() => handleNavClick('quiz')}
                    />
                </nav>

                {/* Buttons Wrapper */}
                <div className="flex items-center gap-4">
                    {/* User Profile (Desktop) */}
                    <button className="hidden md:flex w-10 h-10 rounded-full border border-primary/20 items-center justify-center hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </button>
                    
                    {/* Hamburger Menu (Mobile) */}
                    <button 
                        className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B1121]/95 backdrop-blur-lg border-b border-primary/20 shadow-2xl animate-in slide-in-from-top-2 duration-300">
                    <nav className="flex flex-col py-4 px-6 gap-2">
                        <MobileNavLink
                            label="이론 학습"
                            active={currentPage === 'theory'}
                            onClick={() => handleNavClick('theory')}
                        />
                        <MobileNavLink
                            label="영상 교육"
                            active={currentPage === 'video'}
                            onClick={() => handleNavClick('video')}
                        />
                        <MobileNavLink
                            label="시뮬레이션"
                            active={currentPage === 'simulation'}
                            onClick={() => handleNavClick('simulation')}
                        />
                        <MobileNavLink
                            label="평가 퀴즈"
                            active={currentPage === 'quiz'}
                            onClick={() => handleNavClick('quiz')}
                        />
                        <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-3 text-slate-300 cursor-pointer hover:text-primary transition-colors">
                             <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                                 <span className="material-symbols-outlined text-primary text-sm">person</span>
                             </div>
                             <span className="text-sm font-medium">내 프로필</span>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

function NavLink({ label, active, onClick }) {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${active
                ? 'text-primary border-primary font-bold'
                : 'text-slate-400 border-transparent hover:text-primary'
                }`}
        >
            {label}
        </a>
    );
}

function MobileNavLink({ label, active, onClick }) {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`flex items-center p-3 rounded-lg text-base font-medium transition-all duration-300 ${
                active
                    ? 'text-primary bg-primary/10 font-bold translate-x-2'
                    : 'text-slate-300 hover:text-primary hover:bg-white/5'
            }`}
        >
            {label}
        </a>
    );
}

export default Header;

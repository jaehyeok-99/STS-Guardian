function Header({ currentPage, setCurrentPage }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => setCurrentPage('home')}
                >
                    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(0,238,255,0.4)] group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-background-dark font-bold">cyclone</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        STS <span className="text-primary font-light">Guardian</span>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <NavLink
                        label="이론 학습"
                        active={currentPage === 'theory'}
                        onClick={() => setCurrentPage('theory')}
                    />
                    <NavLink
                        label="영상 교육"
                        active={currentPage === 'video'}
                        onClick={() => setCurrentPage('video')}
                    />
                    <NavLink
                        label="시뮬레이션"
                        active={currentPage === 'simulation'}
                        onClick={() => setCurrentPage('simulation')}
                    />
                    <NavLink
                        label="평가 퀴즈"
                        active={currentPage === 'quiz'}
                        onClick={() => setCurrentPage('quiz')}
                    />
                </nav>

                {/* User Profile */}
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </button>
                </div>
            </div>
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

export default Header;

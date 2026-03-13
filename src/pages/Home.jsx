import { motion } from 'framer-motion';

const Home = ({ setCurrentPage }) => {
    const scrollToModules = () => {
        const el = document.getElementById('modules');
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-piping min-h-screen flex flex-col">
            <main className="flex-grow flex flex-col">
                {/* Hero Section - Centered Layout */}
                <section className="relative px-6 lg:px-20 py-24 lg:py-40 max-w-5xl mx-auto w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="z-10 flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-10 uppercase tracking-[0.2em]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Integrated Training Portfolio
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-8 text-white tracking-tighter">
                            미래 에너지를 위한<br />
                            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,238,255,0.3)]">안전의 표준</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-slate-400 mb-14 max-w-3xl leading-relaxed">
                            이론 학습부터 시각적 체험, 그리고 실감형 시뮬레이션까지.<br className="hidden md:block" />
                            벙커링 전문가를 위한 통합 안전 교육 솔루션입니다.
                        </p>

                        <div className="flex flex-wrap gap-6 justify-center">
                            <button
                                onClick={scrollToModules}
                                className="bg-primary text-background-dark px-12 py-5 rounded-2xl font-bold text-xl neon-glow transition-all hover:scale-105 active:scale-95"
                            >
                                학습 시작하기
                            </button>
                            <button className="bg-white/5 border border-white/10 text-slate-300 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                                기술 문서 보기
                            </button>
                        </div>

                        {/* Quick Stats/Features - Centered */}
                        <div className="mt-24 grid grid-cols-3 gap-12 md:gap-24 border-t border-white/5 pt-16 w-full max-w-3xl">
                            <div>
                                <div className="text-primary text-3xl font-black mb-2">04</div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.1em]">Core Modules</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-black mb-2">100%</div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.1em]">Digital Env</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-black mb-2">Expert</div>
                                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.1em]">Integrated</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background Ambient Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                        <div className="w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full"></div>
                    </div>
                </section>

                {/* Unified Modules Section */}
                <section id="modules" className="px-6 lg:px-20 py-24 bg-background-dark/50 border-t border-white/5 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-white mb-4 italic tracking-tighter underline decoration-primary underline-offset-8">CURRICULUM</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto mt-6">
                                이론부터 실무까지, 단계별 학습을 통해 벙커링 안전 전문가로 성장하십시오.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ModuleCard
                                icon="menu_book"
                                title="이론 학습"
                                desc="SOP 및 물리적 특성, 법규 등 기초 지식 습득"
                                onClick={() => setCurrentPage('theory')}
                            />
                            <ModuleCard
                                icon="play_circle"
                                title="영상 교육"
                                desc="실제 현장 사례 및 VFX 기반 위험 인지 교육"
                                onClick={() => setCurrentPage('video')}
                            />
                            <ModuleCard
                                icon="videogame_asset"
                                title="시뮬레이션"
                                desc="3D 가상 환경에서의 실감형 현장 훈련"
                                onClick={() => setCurrentPage('simulation')}
                            />
                            <ModuleCard
                                icon="fact_check"
                                title="평가 퀴즈"
                                desc="시나리오 대응 능력 최종 점검 및 인증"
                                onClick={() => setCurrentPage('quiz')}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

const ModuleCard = ({ icon, title, desc, onClick }) => (
    <motion.div
        whileHover={{ y: -10 }}
        onClick={onClick}
        className="group cursor-pointer flex flex-col bg-surface-dark border border-white/5 p-8 rounded-[24px] card-glow transition-all hover:bg-white/5"
    >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">{desc}</p>
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest pt-4 border-t border-white/5">
            <span>트레이닝 시작</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
    </motion.div>
);

export default Home;

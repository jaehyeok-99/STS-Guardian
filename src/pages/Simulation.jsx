const Simulation = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Simulation Center</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">실감형 벙커링 연습</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 aspect-video bg-black/50 border border-primary/20 rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined text-8xl text-primary/30 animate-pulse">videogame_asset</span>
                        <p className="text-primary font-mono text-sm mt-4 tracking-widest">INITIALIZING VIRTUAL ENVIRONMENT...</p>
                    </div>
                    <div className="absolute top-6 left-6 flex gap-4">
                        <div className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-primary border-primary/30">
                            FPS: 60.0
                        </div>
                        <div className="glass-panel px-4 py-2 rounded-lg text-xs font-mono text-primary border-primary/30">
                            LATENCY: 12ms
                        </div>
                    </div>
                    <button className="absolute bottom-10 left-12 right-12 py-4 bg-primary text-background-dark font-black rounded-xl neon-glow hover:scale-[1.02] transition-all">
                        시뮬레이션 엔진 로드
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-2xl">
                        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">analytics</span> 트레이닝 통계
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-400">숙련도 점수</span>
                                    <span className="text-primary font-bold">85/100</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-400">돌발 상황 대처</span>
                                    <span className="text-primary font-bold">42%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary w-[42%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border border-border-dark p-6 rounded-2xl bg-surface-dark">
                        <h4 className="font-bold text-white text-sm mb-4">학습 중인 모듈</h4>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">02</div>
                            <div>
                                <h5 className="text-sm font-bold text-white">냉각 및 치환</h5>
                                <p className="text-xs text-slate-500">진행률 45%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulation;

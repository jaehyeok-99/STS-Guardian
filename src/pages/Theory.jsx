const Theory = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Theory Course</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">액체수소 안전 이론</h2>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">1. 액체수소의 물리적 특성</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            액체수소는 영하 253도의 극저온 상태를 유지해야 하며, 기화 시 부피가 약 800배 팽창합니다.
                            이러한 특성 때문에 보관 및 이송 시 정밀한 압력 제어와 단열 기술이 필수적입니다.
                        </p>
                        <div className="bg-background-dark/50 border border-primary/10 rounded-xl p-4">
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex gap-2">
                                    <span className="text-primary">●</span> 비점: -252.87°C (1기압)
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">●</span> 밀도: 기체 대비 약 800배
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">●</span> 가연성 범위: 4% ~ 75% (공기 중)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">2. 안전 보호구(PPE) 착용 수칙</h3>
                        <p className="text-slate-300 leading-relaxed">
                            극저온 화상을 방지하기 위해 방한 기능이 포함된 내화학 장갑, 보안경, 정전기 방지 안전화 착용이 필수입니다.
                            모든 장비는 수소 취성에 강한 재질로 제작되어야 합니다.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
                        <h4 className="text-sm font-bold text-white mb-4 uppercase">학습 자료 다운로드</h4>
                        <div className="space-y-3">
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm flex items-center justify-between px-4 transition-all">
                                <span>PDF 가이드북</span>
                                <span className="material-symbols-outlined text-sm">download</span>
                            </button>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm flex items-center justify-between px-4 transition-all">
                                <span>SOP 체크리스트</span>
                                <span className="material-symbols-outlined text-sm">download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Theory;

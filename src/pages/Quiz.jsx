const Quiz = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Assessment</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">안전 적격성 퀴즈</h2>

            <div className="max-w-3xl mx-auto">
                <div className="glass-panel p-10 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

                    <div className="mb-10 text-center">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">QUESTION 04 / 10</span>
                        <h3 className="text-2xl font-bold text-white mt-6 leading-relaxed">
                            액체수소 벙커링 시작 전, 배관 내 산소 농도를 몇 % 이하로 유지해야 안전한가요?
                        </h3>
                    </div>

                    <div className="grid gap-4">
                        {['1.0% 이하', '5.0% 이하', '10.0% 이하', '21.0% 이하'].map((option, idx) => (
                            <button
                                key={idx}
                                className="w-full py-5 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/30 text-left text-slate-300 hover:text-primary font-medium transition-all group flex items-center justify-between"
                            >
                                <span>{option}</span>
                                <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-primary flex items-center justify-center">
                                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> 이전 문제
                        </button>
                        <button className="px-8 py-3 bg-white text-background-dark font-bold rounded-xl hover:bg-primary transition-all">
                            다음 단계로
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;

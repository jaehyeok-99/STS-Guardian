import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SIM_MODULES = [
    {
        id: 'stage1',
        stage: 'Stage 1',
        title: '사전 준비 및 시스템 점검',
        icon: 'fact_check',
        desc: 'Bunkering 시작 전 기상 조건 및 설비 연결 상태를 점검합니다.'
    },
    {
        id: 'stage2',
        stage: 'Stage 2',
        title: '접근/접선 및 계류 시뮬레이션',
        icon: 'directions_boat',
        desc: '선박 간 물리적 안정성을 확보하고 안전한 계류 절차를 훈련합니다.'
    },
    {
        id: 'stage3',
        stage: 'Stage 3',
        title: '호스 연결 및 예냉 과정',
        icon: 'settings_input_component',
        desc: '극저온 상태의 벙커링을 위한 배관 냉각 및 연결 절차를 실습합니다.'
    },
    {
        id: 'stage4',
        stage: 'Stage 4',
        title: '연료 이송 및 모니터링',
        icon: 'monitoring',
        desc: '실제 이송 과정에서의 압력, 유량, 독성 위험을 실시간으로 관리합니다.'
    }
];

const Simulation = () => {
    const [selectedSimId, setSelectedSimId] = useState(SIM_MODULES[0].id);
    const selectedSim = SIM_MODULES.find(s => s.id === selectedSimId);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
            {/* Sidebar Selector */}
            <div className="lg:w-80 flex-shrink-0">
                <div className="flex items-center gap-2 mb-8">
                    <span className="h-px w-6 bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">Training Simulator</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-10 leading-tight">실감형<br />시뮬레이션</h2>

                <nav className="flex flex-col gap-3">
                    {SIM_MODULES.map((sim) => (
                        <button
                            key={sim.id}
                            onClick={() => setSelectedSimId(sim.id)}
                            className={`p-5 rounded-2xl border text-left transition-all duration-300 group ${selectedSimId === sim.id
                                ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,238,255,0.1)]'
                                : 'bg-white/5 border-white/5 hover:border-white/20 active:scale-95'
                                }`}
                        >
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
                                {sim.stage}
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`material-symbols-outlined transition-colors duration-300 ${selectedSimId === sim.id ? 'text-primary' : 'text-slate-600 group-hover:text-slate-400'
                                    }`}>
                                    {sim.icon}
                                </span>
                                <span className={`text-sm font-bold transition-colors duration-300 ${selectedSimId === sim.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                                    }`}>
                                    {sim.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </nav>

                {/* Global Sim Stats */}
                <div className="mt-10 p-6 glass-panel rounded-2xl border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">settings</span> Engine Status
                    </h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="text-slate-400">Unity WebGL Renderer</span>
                            <span className="text-primary font-bold">READY</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="text-slate-400">Asset Bundle Loading</span>
                            <span className="text-yellow-500 font-bold">PREPARING</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Simulation Area */}
            <div className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedSimId}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                        className="relative aspect-video bg-black/90 rounded-[40px] border border-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-12 text-center"
                    >
                        {/* HUD Overlay Elements */}
                        <div className="absolute top-8 left-8 flex gap-4 opacity-50">
                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-primary">FPS: --</div>
                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-primary">LATENCY: --</div>
                        </div>

                        <div className="absolute top-8 right-8 opacity-50">
                            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-slate-400 uppercase tracking-widest">{selectedSim.stage} ACTIVE</div>
                        </div>

                        {/* Preparation Content */}
                        <div className="z-10 flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-8 relative">
                                <span className="material-symbols-outlined text-5xl text-primary animate-pulse">{selectedSim.icon}</span>
                                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20"></div>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">
                                {selectedSim.title} <br />
                                <span className="text-primary">시뮬레이션 환경 준비 중</span>
                            </h3>

                            <p className="text-slate-500 text-sm max-w-md leading-relaxed mb-10">
                                곧 통합 업데이트될 예정입니다.
                            </p>

                            <div className="flex gap-4">
                                <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scenario Loading...</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, #00eeff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30">
                            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-1/3 animate-[shimmer_2s_infinite]"></div>
                            </div>
                            <span className="text-[9px] font-mono text-primary tracking-[0.5em] uppercase">Unity Integration Pending</span>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Info Card Below Sim */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 glass-panel rounded-3xl border border-white/5">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-primary text-lg">description</span> 모듈 상세 설명
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed italic">
                            " {selectedSim.desc} "
                        </p>
                    </div>
                    <div className="p-8 glass-panel rounded-3xl border border-white/5">
                        <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-primary text-lg">verified</span> 학습 목표
                        </h4>
                        <ul className="text-[11px] text-slate-400 space-y-2">
                            <li>• {selectedSim.stage} 기반 절차적 숙련도 확보</li>
                            <li>• 비정상 상황 발생 시 데이터 기반 판단 능력 배양</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulation;

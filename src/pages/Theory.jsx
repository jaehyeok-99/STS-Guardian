import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const THEORY_TOPICS = [
    {
        id: 'intro',
        category: '기초 지식',
        title: '암모니아의 물리적 특성',
        icon: 'science',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    암모니아(NH3)는 무색의 유독한 기체로, 고농도에서 강한 자극성 냄새가 납니다. STS 벙커링 작업 시 암모니아의 물리적/화학적 특성을 정확히 이해하는 것이 안전의 시작입니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 className="text-primary font-bold mb-2">비등점 (Boiling Point)</h4>
                        <div className="text-2xl font-mono text-white">-33.34°C (1기압)</div>
                        <p className="text-[11px] text-slate-500 mt-2">상온에서 기체 상태이며, 이송을 위해 영하로 냉각되거나 가압됩니다.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 className="text-primary font-bold mb-2">독성 (Toxicity)</h4>
                        <div className="text-2xl font-mono text-white">25 ppm (TWA)</div>
                        <p className="text-[11px] text-slate-500 mt-2">허용 농도가 매우 낮아 미세한 누출에도 극도로 주의해야 합니다.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'ppe',
        category: '안전 장비',
        title: '보호구(PPE) 착용 규정',
        icon: 'shield_person',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    암모니아는 피부와 안구에 치명적인 손상을 입힐 수 있습니다. 모든 작업자는 규정된 보호구를 완벽히 착용해야 합니다.
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="material-symbols-outlined text-primary">gas_meter</span>
                        <div>
                            <h4 className="font-bold text-white">가스 마스크 (Full-face Mask)</h4>
                            <p className="text-xs text-slate-500 mt-1">암모니아 필터가 장착된 전면형 마스크 필수.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="material-symbols-outlined text-primary">dry_cleaning</span>
                        <div>
                            <h4 className="font-bold text-white">내화학 보호복 (Chemical Suit)</h4>
                            <p className="text-xs text-slate-500 mt-1">암모니아 침투 저항성을 인증받은 소재의 전신 보호복.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'sop3',
        category: '공정 단계(Stage 3)',
        title: '호스 연결 및 예냉 절차',
        icon: 'valve',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    Stage 3인 호스 연결 및 예냉(Cooling-down)은 가장 위험한 단계 중 하나입니다. 극저온 암모니아가 유입되기 전 배관의 온도를 단계적으로 낮추어야 합니다.
                </p>
                <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                    <h4 className="flex items-center gap-2 text-yellow-500 font-bold mb-3">
                        <span className="material-symbols-outlined">warning</span> 주의 사항
                    </h4>
                    <p className="text-sm text-slate-400">
                        급격한 냉각은 배관의 파손과 누출을 유발할 수 있습니다. 설정된 드롭 레이트(Drop Rate)를 반드시 준수하십시오.
                    </p>
                </div>
            </div>
        )
    }
];

const Theory = () => {
    const [selectedTopicId, setSelectedTopicId] = useState(THEORY_TOPICS[0].id);
    const selectedTopic = THEORY_TOPICS.find(t => t.id === selectedTopicId);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
            {/* Sidebar Selector */}
            <div className="lg:w-80 flex-shrink-0">
                <div className="flex items-center gap-2 mb-8">
                    <span className="h-px w-6 bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">Training Syllabus</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-10 leading-tight">이론 교육<br />커리큘럼</h2>

                <nav className="flex flex-col gap-3">
                    {THEORY_TOPICS.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => setSelectedTopicId(topic.id)}
                            className={`p-5 rounded-2xl border text-left transition-all duration-300 group ${selectedTopicId === topic.id
                                    ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,238,255,0.1)]'
                                    : 'bg-white/5 border-white/5 hover:border-white/20 active:scale-95'
                                }`}
                        >
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">
                                {topic.category}
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`material-symbols-outlined transition-colors duration-300 ${selectedTopicId === topic.id ? 'text-primary' : 'text-slate-600 group-hover:text-slate-400'
                                    }`}>
                                    {topic.icon}
                                </span>
                                <span className={`text-sm font-bold transition-colors duration-300 ${selectedTopicId === topic.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                                    }`}>
                                    {topic.title}
                                </span>
                            </div>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTopicId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="glass-panel p-10 rounded-[40px] border border-white/5 min-h-[600px] flex flex-col relative overflow-hidden"
                    >
                        {/* Background Decorative Icon */}
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                            <span className="material-symbols-outlined text-[300px]">{selectedTopic.icon}</span>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black rounded-full mb-6 border border-primary/20">
                                {selectedTopic.category}
                            </div>
                            <h3 className="text-4xl font-black text-white mb-10 tracking-tight">
                                {selectedTopic.title}
                            </h3>

                            <div className="prose prose-invert max-w-none">
                                {selectedTopic.content}
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Learning in progress</span>
                            </div>
                            <button className="bg-white text-background-dark px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all">
                                완료 및 다음으로
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Theory;

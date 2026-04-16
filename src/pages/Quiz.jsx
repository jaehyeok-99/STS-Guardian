import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 역할 정의 및 세부 데이터 (제안서 및 이수 기준표 기반)
const ROLES = [
    { id: 'op', name: '조종자', icon: 'settings_remote', focus: '물리적 안전/이격 판단' },
    { id: 'wk', name: '작업자', icon: 'engineering', focus: '공정 숙련/SOP 준수' },
    { id: 'hse', name: '안전책임자', icon: 'admin_panel_settings', focus: '위험 관리/중단 판단' },
    { id: 'ctrl', name: '관제자', icon: 'monitoring', focus: '전 단계 통합 모니터링' },
    { id: 'tech', name: '설비담당자', icon: 'build', focus: '장비 트립/재개 판단' },
    { id: 'ert', name: '비상대응팀', icon: 'emergency', focus: '긴급 철수/구조 지원' },
    { id: 'lead', name: 'STS 운영 책임자', icon: 'assignment_ind', focus: '최종 의사결정' },
    { id: 'comp', name: '컴플라이언스', icon: 'verified', focus: '규정/적합성 검증' },
    { id: 'data', name: '데이터 분석', icon: 'analytics', focus: '로그/사후 분석' },
];

// 문제 은행 (역할별 태그 포함)
const QUESTION_BANK = [
    {
        id: 1,
        roles: ['op', 'hse', 'lead', 'ctrl'],
        question: "벙커링 중 비정상 압력 상승 감지 시, 최종 '긴급 철수(Abort & Retreat)' 판단의 핵심 기준은 무엇인가요?",
        options: [
            "상대 선박의 동의 후 작업 종료",
            "안전 구역 내 가스 농도 50% 초과 시 대기",
            "설정된 임계값(High-High) 도달 시 즉시 철수",
            "항만 운영기관의 승인 대기"
        ],
        answer: 2
    },
    {
        id: 2,
        roles: ['wk', 'tech', 'op'],
        question: "Stage 3 예냉(Cooling-down) 단계에서 배관 파손을 방지하기 위한 핵심 조치는 무엇입니까?",
        options: [
            "신속한 이송을 위한 밸브 전개",
            "설정된 온도 하강률(Drop Rate) 엄격 준수",
            "펌프 압력을 최대치로 가압",
            "모니터링 주기 완화"
        ],
        answer: 1
    },
    {
        id: 3,
        roles: ['hse', 'ctrl', 'ert', 'lead'],
        question: "암모니아 누출 시 인명 보호를 위해 안전책임자(HSE)가 보유한 즉각적인 권한은?",
        options: [
            "이송 장비의 영구 회수",
            "작업 즉시 중단 및 인원 대피 결정권",
            "선박의 항로 변경 명령",
            "예산 집행 승인 권한"
        ],
        answer: 1
    },
    {
        id: 4,
        roles: ['op', 'lead', 'data'],
        question: "의사결정 로직 Level 4에서 'Track B'로 즉시 전환되는 상황은 언제인가요?",
        options: [
            "단순 장비 결함 발견 시",
            "정상 범위 내의 미세 누출 발생 시",
            "긴급 철수(Abort) 판단이 확정된 즉시",
            "Stage 0 오리엔테이션 종료 시"
        ],
        answer: 2
    }
];

const Quiz = ({ fuelType = 'NH3' }) => {
    const [step, setStep] = useState('role-select'); // 'role-select', 'testing', 'result'
    const [selectedRole, setSelectedRole] = useState(null);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [results, setResults] = useState([]);

    if (fuelType === 'LH2') {
        return (
            <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center mt-10">
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-5xl text-slate-500">pending</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">액화수소(LH2) 전용 과정</h2>
            </div>
        );
    }

    const startQuiz = (role) => {
        setSelectedRole(role);
        setStep('testing');
        setStartTime(Date.now());
        setCurrentIdx(0);
        setScore(0);
        setResults([]);
    };

    const handleAnswer = (optionIdx) => {
        const filteredQuestions = QUESTION_BANK.filter(q => q.roles.includes(selectedRole?.id));
        const isCorrect = optionIdx === filteredQuestions[currentIdx].answer;

        if (isCorrect) setScore(score + 1);

        const reactionTime = (Date.now() - startTime) / 1000;
        setResults([...results, { qId: filteredQuestions[currentIdx].id, isCorrect, time: reactionTime }]);

        if (currentIdx + 1 < filteredQuestions.length) {
            setCurrentIdx(currentIdx + 1);
            setStartTime(Date.now());
        } else {
            setStep('result');
        }
    };

    const filteredQuestions = selectedRole ? QUESTION_BANK.filter(q => q.roles.includes(selectedRole.id)) : [];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
                {step === 'role-select' && (
                    <motion.div
                        key="role-select"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                                Competency Assessment
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">역할별 안전 적격성 평가</h2>
                        <p className="text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                            본인의 역할을 선택하면 해당 직무에 최적화된 안전 수칙 및 상황 대응 시나리오 퀴즈가 시작됩니다.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {ROLES.map(role => (
                                <button
                                    key={role.id}
                                    onClick={() => startQuiz(role)}
                                    className="p-8 bg-surface-dark border border-white/5 rounded-[32px] hover:border-primary hover:bg-primary/5 transition-all text-left group card-glow overflow-hidden relative"
                                >
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-[60px] text-primary">{role.icon}</span>
                                    </div>
                                    <span className="material-symbols-outlined text-primary mb-6 text-4xl group-hover:scale-110 transition-transform block">{role.icon}</span>
                                    <div className="text-white text-xl font-bold mb-2">{role.name}</div>
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest group-hover:text-primary/70 transition-colors">{role.focus}</div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 'testing' && filteredQuestions.length > 0 && (
                    <motion.div
                        key="testing"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-xl">{selectedRole.icon}</span>
                                </span>
                                <div>
                                    <div className="text-white text-sm font-bold uppercase tracking-tight">{selectedRole.name} 적격성 평가</div>
                                    <div className="text-[10px] text-slate-500 font-medium">데이터 기반 판단 역량 측정 중</div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-mono text-slate-400">
                                QUESTION <span className="text-primary font-bold">{currentIdx + 1}</span> / {filteredQuestions.length}
                            </div>
                        </div>

                        <div className="glass-panel p-10 rounded-[40px] border border-white/10 relative overflow-hidden mb-8">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_var(--glow-color)]"></div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight italic">
                                "{filteredQuestions[currentIdx].question}"
                            </h3>
                        </div>

                        <div className="grid gap-4">
                            {filteredQuestions[currentIdx].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className="w-full p-7 bg-white/5 border border-white/5 rounded-3xl text-left text-lg text-slate-300 hover:bg-white/10 hover:border-primary/50 hover:text-white transition-all group flex items-center justify-between"
                                >
                                    <span className="flex-grow">{option}</span>
                                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity">arrow_forward_ios</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center bg-surface-dark p-16 rounded-[48px] border border-white/5 card-glow max-w-3xl mx-auto overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/20">
                            <span className="material-symbols-outlined text-5xl text-primary animate-pulse">verified</span>
                        </div>

                        <h2 className="text-4xl font-black text-white mb-3">{selectedRole.name} 적격성 요약</h2>
                        <p className="text-slate-500 mb-12 tracking-[0.3em] uppercase text-[10px] font-black">Safety Evaluation Complete</p>

                        <div className="grid grid-cols-2 gap-8 mb-16">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 relative group hover:border-primary/30 transition-colors">
                                <div className="text-5xl font-black text-primary mb-2 shadow-primary/20 drop-shadow-lg">
                                    {Math.round((score / filteredQuestions.length) * 100)}%
                                </div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Accuracy Score</div>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/5 relative group hover:border-secondary/30 transition-colors">
                                <div className="text-5xl font-black text-secondary mb-2 shadow-secondary/20 drop-shadow-lg">
                                    {(results.reduce((acc, curr) => acc + curr.time, 0) / results.length).toFixed(1)}s
                                </div>
                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Avg. Reaction Time</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => { setStep('role-select'); setScore(0); setCurrentIdx(0); setResults([]); }}
                                className="bg-primary text-background-dark px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all neon-glow"
                            >
                                다른 역할로 테스트 시작
                            </button>
                            <button className="bg-white/5 border border-white/10 text-slate-300 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                                리포트 다운로드
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Quiz;

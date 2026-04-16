import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EAPContent = () => {
    const [selectedA, setSelectedA] = useState('A-1');

    const accidents = [
        {
            id: 'A-1', title: '폭발 화재', desc: '화재 및 폭발 동반 심각 사고', color: 'text-red-500 bg-red-500/10 border-red-500/30',
            responses: [
                { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '자동 소화 설비 가동 및 전 공정 비상 정지(ESD) 실시.' },
                { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '전 직원 공장 밖 안전 구역으로 즉시 대피 유도.' },
                { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '보호구 착용 후 인접 탱크 냉각 및 연소 확대 방지 주력.' },
                { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '관할 소방서 상황 통보 및 지원 요청.' },
                { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '화재 완전 진압 후 구조 안전 진단 및 가스 잔류 검사.' },
            ],
            elements: [
                { id: 1, title: '비상 자원', icon: 'inventory_2', desc: '대용량 폼 방사포, 전신 방화복, 화상 전용 구급함 등 화재 진압 특화 물자 구비' },
                { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '소방 직통 핫라인 상시 유지 및 방폭형 무전기(UHF) 활용' },
                { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '(A/B 사고 대응 매트릭스 탭의 A-1 세부 대응 절차 참조)' },
                { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '(지휘)현장소장, (진압)초기소방대장, (구조)보건관리자 및 구급대원' },
                { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '관할 소방본부 광역 대응망 연계 및 해경 함정 표면 냉각 지원 조율' },
                { id: 6, title: '교육 및 훈련', icon: 'school', desc: '연 2회 소화 설비 실방수 훈련 및 중증 화상 응급처치 집중 교육' },
                { id: 7, title: '응급조치 (MSDS)', icon: 'medical_services', desc: '열화상 부위 멸균 드레싱 적용, 흡입 화상 의심 시 즉각 100% 산소 공급' },
                { id: 8, title: '트리거 체계', icon: 'warning', desc: '다중 불꽃 감지기 연동 경보 작동 및 열화상 감시 카메라 80℃ 초과 알람 시 발령' },
            ]
        },
        {
            id: 'A-2', title: '대량 암모니아 누출', desc: '현장 전체로 유독가스 확산', color: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
            responses: [
                { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '누출 구간 메인 밸브 원격 차단 및 고농도 경보 발령.' },
                { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '풍향을 고려하여 바람의 직각 방향으로 전 직원 대피.' },
                { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '제독수 살포를 통한 가스 희석 및 확산 방지벽 구축.' },
                { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '유관 기관(환경청, 소방서) 누출 사실 및 농도 보고.' },
                { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '누출 부위 완벽 봉쇄 확인 및 대기 농도 정상화 확인.' },
            ],
            elements: [
                { id: 1, title: '비상 자원', icon: 'inventory_2', desc: '레벨 A 등급 화학보호복, 양압식 공기호흡기(SCBA), 살수용 제독 살포기' },
                { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '전관 대피 방송 시스템 및 환경부 화학재난합동방재센터 통신망' },
                { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '(A/B 사고 대응 매트릭스 탭의 A-2 세부 대응 절차 참조)' },
                { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '(지휘)HSE팀장, (제독)환경관리자, (통제/경비)보안요원' },
                { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '화학재난합동방재센터 제독차 지원 및 지자체 인근 주민 대피 사이렌 발송' },
                { id: 6, title: '교육 및 훈련', icon: 'school', desc: '분기별 레벨 A 보호구 및 공기호흡기 착용 숙달 및 밀폐 공간 대피 훈련' },
                { id: 7, title: '응급조치 (MSDS)', icon: 'medical_services', desc: '오염 의복 즉각 탈의 후 전신 온수 세척 15분 이상 실시 및 제독' },
                { id: 8, title: '트리거 체계', icon: 'warning', desc: '고정식 암모니아 가스 디텍터 25ppm(경고) 초과 및 50ppm(위험) 구간 지속 감지 시' },
            ]
        },
        {
            id: 'A-3', title: '국소, 지속 누출', desc: '특정 배관/밸브 미세 지속 누출', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
            responses: [
                { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '해당 설비 로컬 밸브 차단 및 접근 금지 테이프 설치.' },
                { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '해당 구역 작업자 신속 철수 및 인접 부서 상황 전파.' },
                { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '송기 마스크 착용 후 유지 보수팀 긴급 수리 실시.' },
                { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '사내 비상 연락망 보고 및 공정 영향성 평가.' },
                { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '수리 완료 후 기밀 시험 실시 및 가스 감지기 정상 작동 확인.' },
            ],
            elements: [
                { id: 1, title: '비상 자원', icon: 'inventory_2', desc: '정화통 부착형 가스 마스크, 휴대용 암모니아 감지기, 누출 밀봉 패드 단기재' },
                { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '공무/정비팀 핫라인 및 로컬 작업자 간 무전 채널' },
                { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '(A/B 사고 대응 매트릭스 탭의 A-3 세부 대응 절차 참조)' },
                { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '(수리/보수)기계설비 파트장, (안전 감시)해당 구역 안전 감시단' },
                { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '사내 자체 진압 원칙이나 누출 확산 시 관할 구청 환경과 신고' },
                { id: 6, title: '교육 및 훈련', icon: 'school', desc: '누출 의심 플랜지 및 밸브 교체 긴급 보수 도상 훈련(Tabletop Exercise)' },
                { id: 7, title: '응급조치 (MSDS)', icon: 'medical_services', desc: '가스 이취에 의한 안구 노출 시 안구 세척기로 10분 이상 지속 세척' },
                { id: 8, title: '트리거 체계', icon: 'warning', 소: '작업자 이취(암모니아 특유 냄새) 신고 체계 또는 포터블 감지기 경음 알람 발생' },
            ]
        },
        {
            id: 'A-4', title: '비누출 중대 인명사고', desc: '추락, 끼임, 질식 등', color: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
            responses: [
                { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '사고 구역 전원 차단 및 추가 위해 요소 제거.' },
                { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '구조대 투입 전 산소 농도 측정 및 안전 장비 점검.' },
                { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '부상자 구출 후 지정 구역 이동 및 1차 응급 처치.' },
                { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '119 구급대 호출 및 병원 이송.' },
                { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '사고 원인 조사 위원회 구성 및 현장 보존.' },
            ],
            elements: [
                { id: 1, title: '비상 자원', icon: 'inventory_2', desc: 'KED(척추 고정판), 다목적 들것, AED(자동심장충격기), 사내 비상 구급차' },
                { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '119 구급대 영상 통화망 및 지정 협력 병원 응급실 핫라인' },
                { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '(A/B 사고 대응 매트릭스 탭의 A-4 세부 대응 절차 참조)' },
                { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '(응급 처치)사내 간호사 및 보건관리자, (구조)지정 구급대원, (조사)안전팀' },
                { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '중증 외상 대응 대형 병원 트라우마 센터 직통 이송 및 경찰 폴리스라인 협조' },
                { id: 6, title: '교육 및 훈련', icon: 'school', desc: '전 직원 기본 심폐소생술(CPR) 및 밀폐공간 구조 훈련 정기 이수' },
                { id: 7, 시: '응급조치 (MSDS)', icon: 'medical_services', desc: '물리적 손상의 경우 기도 확보, 지혈, 경추 고정 및 쇼크 방지 모포 보온' },
                { id: 8, title: '트리거 체계', icon: 'warning', desc: '작업자 안전모 맨다운(Man-Down) 센서 작동 또는 최초 목격자 무전 비상 호출' },
            ]
        },
        {
            id: 'A-5', title: '운영 장애 경미 사고', desc: '설비 고장 및 경미한 조작 실수', color: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
            responses: [
                { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '이상 알람 발생 구간 모니터링 및 육안 확인.' },
                { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '경미한 리크 지점 임시 씰링 및 압력 하향 조정.' },
                { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '주의 경고 게시 및 현장 상시 대기 인원 배치.' },
                { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '관련 부서 업무 연락 및 교대조 인수인계 강화.' },
                { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '정비 계획 수립 후 설비 정상화 및 일지 기록.' },
            ],
            elements: [
                { id: 1, title: '비상 자원', icon: 'inventory_2', desc: '예비 부품(Spare Parts), 수동 조작 레버 툴, 락아웃/태그아웃(LOTO) 키트' },
                { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '사내 인트라넷 유지보수 게시판 및 중앙 제어실(CCR) 인터폰' },
                { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '(A/B 사고 대응 매트릭스 탭의 A-5 세부 대응 절차 참조)' },
                { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '(상황 확인)설비 오퍼레이터, (복구 조치)계전실 및 유지보수 엔지니어' },
                { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '해당 없음 (사내 도급사 연계 및 원청 보고 체계로 자체 종결)' },
                { id: 6, title: '교육 및 훈련', icon: 'school', desc: '설비별 트러블슈팅(Troubleshooting) 매뉴얼 숙독 및 수동 조작 실습' },
                { id: 7, title: '응급조치 (MSDS)', icon: 'medical_services', desc: '작업 중 발생한 경미 찰과상 시 사내 보건소 방문 후 일반 소독 조치' },
                { id: 8, title: '트리거 체계', icon: 'warning', desc: 'DCS(분산제어시스템) 모니터 설비 이상 팝업 및 현장 주황색 경광등 점등' },
            ]
        },
    ];

    const defaultElements = [
        { id: 1, title: '비상 자원', icon: 'inventory_2', desc: '방독면, 산소 소생기, 소화기 등 (사고 유형을 선택하세요)' },
        { id: 2, title: '비상 통신 시설', icon: 'cell_tower', desc: '무전 채널, 비상 연락망, 위성 통신망 (사고 유형을 선택하세요)' },
        { id: 3, title: '대응 절차', icon: 'quick_reference_all', desc: '사고 유형별 대응 절차 확인 (사고별로 다름)' },
        { id: 4, title: '담당자 및 역할', icon: 'groups', desc: '지휘자, 통제자 등 명확한 R&R (사고 유형을 선택하세요)' },
        { id: 5, title: '공공 비상대응', icon: 'local_fire_department', desc: '항만청, 해경, 소방서 연계 체계도 (사고 유형을 선택하세요)' },
        { id: 6, title: '교육 및 훈련', icon: 'school', desc: '정기 도상 훈련 및 비상대응 교육 (사고 유형을 선택하세요)' },
        { id: 7, title: '응급조치 (MSDS)', icon: 'medical_services', desc: '암모니아 특화 표준 응급처치 (사고 유형을 선택하세요)' },
        { id: 8, title: '트리거 체계', icon: 'warning', desc: '위급 상황 비상 발령 핵심 기준점 (사고 유형을 선택하세요)' },
    ];

    const activeResponses = selectedA
        ? accidents.find(a => a.id === selectedA)?.responses
        : [
            { id: 'B-1', title: '사고 인지 및 초기통제', icon: 'notifications_active', desc: '사고 유형을 선택하면 구체적인 절차가 표시됩니다.' },
            { id: 'B-2', title: '인명 보호 및 대피 개시', icon: 'directions_run', desc: '사고 유형을 선택하면 구체적인 절차가 표시됩니다.' },
            { id: 'B-3', title: '안전 이동 및 노출 회피 관리', icon: 'shield', desc: '사고 유형을 선택하면 구체적인 절차가 표시됩니다.' },
            { id: 'B-4', title: '외부 대응 연계', icon: 'support_agent', desc: '사고 유형을 선택하면 구체적인 절차가 표시됩니다.' },
            { id: 'B-5', title: '안정화 및 복구 판단', icon: 'health_and_safety', desc: '사고 유형을 선택하면 구체적인 절차가 표시됩니다.' },
        ];

    const activeElements = selectedA
        ? accidents.find(a => a.id === selectedA)?.elements
        : defaultElements;

    return (
        <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed max-w-3xl">
                STS 작업 중 발생할 수 있는 사고 결과 유형(A)에 따라 신속하고 정확한 대응 절차(B)를 수행하기 위한 전사적 비상대응계획(EAP) 가이드입니다.
            </p>

            <div className="mt-8">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">touch_app</span> Select Trigger (사고 유형 선택)
                </div>
                <div className="flex gap-2 mb-10 overflow-x-auto pb-2 custom-scrollbar">
                    {accidents.map(acc => (
                        <button
                            key={acc.id}
                            onClick={() => setSelectedA(acc.id)}
                            className={`flex whitespace-nowrap items-center gap-2 px-5 py-3 rounded-full border text-sm transition-all ${selectedA === acc.id ? 'bg-primary text-background-dark font-bold border-primary shadow-[0_0_15px_var(--glow-color-light)]' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <span className="font-mono text-xs opacity-70">{acc.id}</span>
                            {acc.title}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6 mb-12">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">task_alt</span> Action Sequence (사고 발생에 따른 대응 절차)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {activeResponses.map((res, idx) => (
                        <motion.div
                            key={res.id}
                            initial={false}
                            animate={{ opacity: selectedA ? 1 : 0.5, y: selectedA ? 0 : 5 }}
                            transition={{ delay: selectedA ? idx * 0.1 : 0 }}
                            className={`p-5 rounded-xl border flex flex-col items-start gap-4 transition-all duration-300 ${selectedA ? 'bg-white/5 border-primary/30 hover:border-primary text-white shadow-[0_0_15px_var(--bg-gradient-color)]' : 'bg-white/5 border-white/10 text-slate-400'}`}
                        >
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm transition-colors ${selectedA ? 'bg-primary text-background-dark shadow-[0_0_10px_var(--glow-color)]' : 'bg-white/10'}`}>
                                {idx + 1}
                            </div>
                            <div className="w-full">
                                <div className={`text-xs font-mono font-bold mb-1 transition-colors ${selectedA ? 'text-primary' : 'text-slate-500'}`}>{res.id}</div>
                                <div className="font-bold text-[15px] mb-2">{res.title}</div>
                                <div className="text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-2 mt-2">{res.desc}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6 mt-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified_user</span> 8 Elements (비상대응계획 8대 요소)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeElements.map(el => (
                        <div key={el.id} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group hover:border-primary/50 relative overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="material-symbols-outlined text-[100px]">{el.icon}</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedA ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-background-dark' : 'bg-white/10 text-white/50'}`}>
                                    <span className="material-symbols-outlined text-[20px]">{el.icon}</span>
                                </div>
                                <div className={`text-[10px] font-black uppercase tracking-wider transition-colors ${selectedA ? 'text-slate-400 group-hover:text-primary' : 'text-slate-600'}`}>Element {el.id}</div>
                            </div>
                            <h4 className="font-bold text-white mb-3 text-[15px]">{el.title}</h4>
                            <p className="text-[13px] text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed flex-grow">
                                {el.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const NH3_TOPICS = [
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
    },
    {
        id: 'eap',
        category: '비상 대응 (EAP)',
        title: '비상대응계획 매뉴얼',
        icon: 'emergency',
        content: <EAPContent />
    }
];

const LH2_TOPICS = [
    {
        id: 'lh2-intro',
        category: '기초 지식',
        title: '액화수소의 물리적 특성',
        icon: 'science',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    액화수소(LH2)는 무색, 무취의 극저온 액체로 가장 가벼운 원소입니다. 매우 넓은 연소 범위와 극도로 낮은 빙점 때문에 암모니아와는 전혀 다른 안전 관리와 특수 설비가 필요합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 className="text-primary font-bold mb-2">비등점 (Boiling Point)</h4>
                        <div className="text-2xl font-mono text-white">-252.8°C (1기압)</div>
                        <p className="text-[11px] text-slate-500 mt-2">절대영도에 가까운 극저온 상태를 유지해야 하므로, 배관의 열수축 및 즉각적인 중증 동상 위험이 큽니다.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <h4 className="text-primary font-bold mb-2">연소 범위 (Flammability)</h4>
                        <div className="text-2xl font-mono text-white">4.0% ~ 75.0%</div>
                        <p className="text-[11px] text-slate-500 mt-2">공기 중 극미량의 정전기나 약한 스파크만으로도 쉽게 폭발할 수 있는 매우 넓고 위험한 연소 범위를 가집니다.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'lh2-ppe',
        category: '안전 장비',
        title: '보호구(PPE) 및 방폭 장비',
        icon: 'shield_person',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                    액화수소 작업 시 가장 핵심적인 보호 조치는 극저온 동상 방지와 정전기에 의한 점화 원천 차단입니다.
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="material-symbols-outlined text-primary">ac_unit</span>
                        <div>
                            <h4 className="font-bold text-white">극저온 전용 보호복</h4>
                            <p className="text-xs text-slate-500 mt-1">-253°C의 액체 비산으로부터 피부를 완벽히 차단하는 다중 단열 보호 장갑 빛 안면 보호구.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="material-symbols-outlined text-primary">electrical_services</span>
                        <div>
                            <h4 className="font-bold text-white">제전 및 방폭 장구류</h4>
                            <p className="text-xs text-slate-500 mt-1">정전기 방지용 안전화 착용 및 모든 휴대용 장비의 수소 대응 본질 방폭(Ex) 인증 필수.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: 'lh2-empty',
        category: '심화 과정',
        title: '공정 및 비상대응계획',
        icon: 'pending',
        content: (
            <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed font-bold">
                    운영 공정 및 비상대응(EAP) 프로세스 등 심화 액화수소(LH2) 과정을 준비 중입니다.
                </p>
            </div>
        )
    }
];

const Theory = ({ fuelType = 'NH3' }) => {
    const TOPICS = fuelType === 'LH2' ? LH2_TOPICS : NH3_TOPICS;

    const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0].id);
    const selectedTopic = TOPICS.find(t => t.id === selectedTopicId) || TOPICS[0];

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
                    {TOPICS.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => setSelectedTopicId(topic.id)}
                            className={`p-5 rounded-2xl border text-left transition-all duration-300 group ${selectedTopicId === topic.id
                                ? 'bg-primary/10 border-primary shadow-[0_0_20px_var(--glow-color-super-light)]'
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


                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Theory;

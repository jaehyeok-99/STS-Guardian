import { useState } from 'react';
import { motion } from 'framer-motion';

const VIDEO_LIST = [
    {
        id: 1,
        title: '암모니아 STS 벙커링 작업 실연',
        desc: '본 영상은 암모니아 STS 벙커링의 전체적인 공정과 안전 수칙을 담고 있습니다.',
        url: `${import.meta.env.BASE_URL}videos/test_video.mp4`,
        type: 'video/mp4',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtg9dnAMQi0gHBIonK4De0JGm5mCJtoqXNdYBBNRq6iCz1Ob7_DsdeU4z91PWbTyVxJBlg2BgiUa7tVackmdKfIHP5j6xlIrFOFNXKFZmYNrAyXGxTQ3DGyRfS6kZWfOaVn64cQYWh7vAHJMjh2-mZZFP8-JPbqLUQ-LCNb3Dx2o4nJI7BHRMc53HpJnyhnSvMSgEcaFDGoklcZhgFRXMcRX7ozkG8SXC7OeF-vwhpFicttckbx4xxRR3b961WlRFv7HN-6NAIm7w',
        duration: '05:20'
    },
    {
        id: 2,
        title: '비상 차단 장치(ESD) 작동 원리',
        desc: '비상 상황 발생 시 이송을 즉시 중단하는 ESD 시스템의 메커니즘을 학습합니다.',
        url: '',
        thumbnail: 'https://picsum.photos/seed/2/400/225',
        duration: '03:45'
    },
    {
        id: 3,
        title: '보호구(PPE) 및 안전 장비 점검',
        desc: '작업 전 필수적으로 점검해야 할 안전 장비 리스트와 올바른 착용법을 안내합니다.',
        url: '',
        thumbnail: 'https://picsum.photos/seed/3/400/225',
        duration: '04:12'
    }
];

const Video = () => {
    const [selectedVideo, setSelectedVideo] = useState(VIDEO_LIST[0]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Video Academy</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-10">영상 교육 센터</h2>

            <div className="grid lg:grid-cols-12 gap-10">
                {/* Main Player Area */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
                        {selectedVideo.url ? (
                            <video
                                key={selectedVideo.url}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay={false}
                            >
                                <source src={selectedVideo.url} type={selectedVideo.type} />
                                브라우저가 해당 영상 형식을 지원하지 않습니다.
                                (MP4 형식으로 변환하거나 최신 브라우저를 사용해 주세요.)
                            </video>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-surface-dark">
                                <span className="material-symbols-outlined text-6xl text-slate-700 mb-4 font-light">video_library</span>
                                <p className="text-slate-500 font-medium">영상을 준비 중입니다.</p>
                            </div>
                        )}
                    </div>

                    <motion.div
                        key={selectedVideo.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-panel p-8 rounded-3xl border border-white/5"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-white tracking-tight">{selectedVideo.title}</h3>
                            <div className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-slate-400">
                                {selectedVideo.duration}
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-3xl">
                            {selectedVideo.desc}
                        </p>
                    </motion.div>
                </div>

                {/* Playlist Area */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest pl-2">교육 리스트</h4>
                    <div className="flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                        {VIDEO_LIST.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedVideo(item)}
                                className={`flex gap-4 p-4 rounded-2xl border transition-all duration-300 text-left group ${selectedVideo.id === item.id
                                    ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(0,238,255,0.1)]'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className="w-32 h-20 bg-black/40 rounded-xl flex-shrink-0 overflow-hidden relative">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-transform duration-500 ${selectedVideo.id === item.id ? 'opacity-40' : 'opacity-60 group-hover:scale-105'
                                            }`}
                                    />
                                    {selectedVideo.id === item.id && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary fill-1">play_arrow</span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white rounded">
                                        {item.duration}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h5 className={`text-sm font-bold mb-1 line-clamp-2 transition-colors ${selectedVideo.id === item.id ? 'text-primary' : 'text-slate-200 group-hover:text-white'
                                        }`}>
                                        {item.title}
                                    </h5>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Module 0{item.id}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;

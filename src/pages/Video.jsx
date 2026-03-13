const Video = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Video Library</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">안전 교육 영상</h2>

            <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <div className="aspect-video bg-surface-dark border border-border-dark rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtg9dnAMQi0gHBIonK4De0JGm5mCJtoqXNdYBBNRq6iCz1Ob7_DsdeU4z91PWbTyVxJBlg2BgiUa7tVackmdKfIHP5j6xlIrFOFNXKFZmYNrAyXGxTQ3DGyRfS6kZWfOaVn64cQYWh7vAHJMjh2-mZZFP8-JPbqLUQ-LCNb3Dx2o4nJI7BHRMc53HpJnyhnSvMSgEcaFDGoklcZhgFRXMcRX7ozkG8SXC7OeF-vwhpFicttckbx4xxRR3b961WlRFv7HN-6NAIm7w"
                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,238,255,0.4)] group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-background-dark text-4xl font-bold fill-1">play_arrow</span>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">액체수소 벙커링 실제 시연 및 공정 안내</h3>
                            <p className="text-slate-300">벙커링 선박과 터미널 간의 이송 공정을 전문가의 해설과 함께 시청하십시오.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest">추천 영상</h4>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
                            <div className="w-24 h-16 bg-surface-dark rounded-lg flex-shrink-0 overflow-hidden border border-white/5">
                                <img src={`https://picsum.photos/seed/${i}/200/150`} className="w-full h-full object-cover opacity-60" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-white line-clamp-2 group-hover:text-primary transition-colors">비상 차단 장치(ESD) 작동 원리</h5>
                                <p className="text-[10px] text-slate-500 mt-1">12:34</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;

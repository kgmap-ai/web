import React from 'react';

const steps = [
    { id: "01", title: "Danışmanlık & Analiz", desc: "Markanızın vizyonunu ve hedef kitlenizi analiz ederek, ihtiyaçlarınıza özel bir strateji geliştiriyoruz." },
    { id: "02", title: "AI Model Tasarımı", desc: "Sizin için özgün dijital modeller ve estetik bir dünya kurguluyoruz; yüz tutarlılığı ve yüksek kalite standartlarımızdır." },
    { id: "03", title: "Prodüksiyon & Styling", desc: "Sessiz lüks estetiğiyle, yapay zeka destekli görsel üretimlerini titizlikle gerçekleştiriyoruz." },
    { id: "04", title: "Teslimat & Optimizasyon", desc: "Görselleri markanızın tüm platformlarına uygun formlarda, yüksek çözünürlükte ve zamanında teslim ediyoruz." }
];

export default function Process() {
    return (
        <section className="py-24 bg-[#3D0A0F] px-16 text-[#F5F0EA]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20">
                    <p className="text-[#E5DACE]/60 text-[11px] uppercase tracking-[4px] mb-4">Sürecimiz</p>
                    <h2 className="text-[3rem] font-serif text-[#F5F0EA]">Çalışma Sürecimiz</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="border-t border-[#F5F0EA]/20 pt-8">
                            <span className="text-[#E5DACE]/40 text-xl font-serif mb-4 block">{step.id}</span>
                            <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                            <p className="text-[#F5F0EA]/70 text-[14px] leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import React from 'react';

const steps = [
  { num: "01", title: "Ürününüzü Gönderin", desc: "Temel ürün fotoğraflarınızı veya referans görsellerinizi bizimle paylaşın." },
  { num: "02", title: "Tasarım Planı", desc: "Marka kimliğinize uygun konsept ve estetik yönelimleri belirliyoruz." },
  { num: "03", title: "Yapay Zeka Üretimi", desc: "Gelişmiş AI modellerimizle prodüksiyon ve tasarım sürecini gerçekleştiriyoruz." },
  { num: "04", title: "Son Düzenlemeler", desc: "Üretilen görseller üzerinde profesyonel rötuş ve renk ayarları yapıyoruz." },
  { num: "05", title: "Teslim Ediyoruz", desc: "Yüksek çözünürlüklü, kullanıma hazır görselleri teslim ediyoruz." },
];

const HowItWorks = () => {
  return (
    <section id="nasil-calisiyoruz" className="section border-t border-gold/20">
      <div className="flex flex-col items-center mb-24">
        <h2 className="title">Nasıl Çalışıyoruz?</h2>
        <div className="w-px h-24 bg-gold mt-12 mb-8"></div>
        <p className="subtitle">Mükemmelliğe Giden Yol</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start md:items-center group">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12 w-24">
                <span className="text-4xl md:text-5xl font-heading text-burgundy/40 group-hover:text-burgundy transition-colors duration-500 italic">
                  {step.num}
                </span>
                <div className="w-full h-px bg-gold/30 mt-4 group-hover:bg-burgundy transition-colors duration-500"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading mb-3 tracking-wide text-title">{step.title}</h3>
                <p className="text-desc font-light leading-relaxed max-w-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

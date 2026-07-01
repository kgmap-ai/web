import React from 'react';

export default function Hero() {
  // Sayfa kaydırma fonksiyonu
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

      {/* 1. Katman: Görsel (z-0) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.model.png"
          alt="Model"
          className="w-full h-full object-cover object-center"
          style={{ imageRendering: 'high-quality' }}
        />
      </div>

      {/* 2. Katman: Overlay (z-10) */}
      <div className="absolute inset-0 z-10 bg-[#E5DACE]/30"></div>

      {/* 3. Katman: İçerik (z-20) */}
      <div className="relative z-20 max-w-[1400px] mx-auto h-full flex flex-col justify-between py-10 px-16">

        {/* Temizlenmiş Navbar */}
        <nav className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-serif text-[#3D0A0F] tracking-widest uppercase">
            KG-MAP <span className="font-light">AI STUDIO</span>
          </h1>
          {/* Menü öğeleri kaldırıldı */}
        </nav>

        {/* Hero Ana Başlık */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-6">Premium Yapay Zeka Görsel Prodüksiyon</p>
          <h1 className="text-[#2D070B] leading-[0.9] text-[7rem] font-serif">
            Yapay Zeka <br />
            <span className="italic font-light">Sanata</span> <br />
            Dönüşüyor
          </h1>
          <p className="text-[#3D0A0F] mt-8 text-lg leading-relaxed max-w-[450px]">
            Moda markaları, gelinlik stüdyoları ve ürün çalışmalarınız için premium yapay zeka görsel üretimi.
          </p>

          <div className="flex gap-4 mt-10">
            {/* Portfolyo Kaydırma Butonu */}
            <button
              onClick={() => scrollTo('portfolyo')}
              className="bg-[#3D0A0F] text-white px-10 py-4 hover:bg-black transition-all text-[12px] uppercase tracking-[2px]"
            >
              PORTFÖYÜ İNCELE
            </button>
            {/* Hizmetler Kaydırma Butonu */}
            <button
              onClick={() => scrollTo('hizmetler')}
              className="border border-[#3D0A0F] text-[#3D0A0F] px-10 py-4 hover:bg-[#3D0A0F] hover:text-white transition-all text-[12px] uppercase tracking-[2px]"
            >
              HİZMETLERİMİZ
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
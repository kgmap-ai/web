import React, { useState, useRef } from 'react';

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
  };

  return (
    <section className="section border-t border-gold/20">
      <div className="flex flex-col items-center mb-24">
        <h2 className="title">Dönüşümü Gör</h2>
        <div className="w-px h-24 bg-gold mt-12 mb-8"></div>
        <p className="subtitle">Öncesi ve Sonrası</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize bg-transparent drop-shadow-2xl"
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
          onTouchMove={handleDrag}
          onMouseDown={handleDrag}
        >
          {/* After Image (Background) */}
          <img 
            src="/images/after.png" 
            alt="AI Sonucu" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          
          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden border-r border-gold/50"
            style={{ width: `${position}%` }}
          >
            <img 
              src="/images/before.png" 
              alt="Normal Fotoğraf" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}
            />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 flex items-center justify-center w-px bg-gold/50"
            style={{ left: `${position}%` }}
          >
            <div className="w-12 h-12 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg -ml-6 border border-gold/40 text-burgundy cursor-ew-resize">
              <span className="tracking-widest text-[10px] font-medium">&lt;&gt;</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 text-title text-xs tracking-[4px] font-medium uppercase drop-shadow-md">Önce</div>
          <div className="absolute bottom-8 right-8 text-background text-xs tracking-[4px] font-medium uppercase drop-shadow-md">Sonra</div>
        </div>
        
        <p className="mt-16 text-desc font-light text-center leading-relaxed max-w-2xl mx-auto">
          Müşterinin gönderdiği standart ürün fotoğrafından, yapay zeka ile üretilmiş yüksek bütçeli lüks kampanya görseline geçiş.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;

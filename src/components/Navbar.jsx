import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-16 py-6 flex justify-between items-center bg-[#F5F0EA]/80 backdrop-blur-md">
      <div className="text-[#3D0A0F] font-serif text-xl tracking-widest uppercase">KG-MAP</div>
      <div className="flex gap-8">
        {/* Butonları ID ile eşleştiriyoruz */}
        <button onClick={() => scrollTo('portfolyo')} className="text-[#3D0A0F] text-[11px] uppercase tracking-[2px] hover:opacity-60">Çalışmalarımız</button>
        <button onClick={() => scrollTo('sürecimiz')} className="text-[#3D0A0F] text-[11px] uppercase tracking-[2px] hover:opacity-60">Sürecimiz</button>
        <button onClick={() => scrollTo('iletişim')} className="text-[#3D0A0F] text-[11px] uppercase tracking-[2px] hover:opacity-60">İletişim</button>
      </div>
    </nav>
  );
}